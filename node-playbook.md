# Deploying Node.js Application

This file is an instruction on how to put a Node.js application into production.

## 1. Updating Packages

It's a good practice to start with updating system packages.

```bash
apt update
apt upgrade
```

## 2. Creating a User

Create a service user, and give permissions to the user.

```bash
useradd -m <svc> # creates user
usermod -aG <svc> <svc> # creates a group
sudo passwd <svc> # creates password for the user
sudo usermod -aG sudo <svc> # gives sudo permissions to the user
sudo su - <svc> # switch user
```

## 3. Creating Project Directory

Create a directory for the Application inside of `/opt`, and add `.env` file to it.

```bash
mkdir /opt/<svc>
chown <svc>:<svc> /opt/<svc> # ties directory permissions to the user
touch /opt/<svc>/.env # creates .env file for the project, if needed
chmod 0600 /opt/<svc>/.env # sets permissions for the owner
vim /opt/<svc>/.env # set variables for the project
```

## 4. Installing Node.js

First, install `n` -- light-weight version manager for Node.js. And then, install preferred Node.js version.

```bash
# check if curl is available
curl --version
# if not, install curl
# sudo apt install curl
curl -L https://bit.ly/n-install | bash # install n
n lts # installs Node.js
```

## 5. Setting Up `systemd`

Prepare `systemd` service, which will run the project.

```bash
sudo EDITOR=vi systemctl edit --force --full <svc>.service
```

Service file should look something like this:

```text
[Unit]
Description=<svc>
Target=network.target

[Service]
Type=simple
User=<svc>
Group=<svc>

Restart=on-failure
Restart-sec=100ms

EnvironmentFile=/opt/<svc>/.env # comment line out, if project doesn't use .env file

WorkingDirectory=/opt/<svc>
ExecStart=/home/<svc>/n/bin/node /opt/<svc>/build/main.js

StandardOutput=append:/var/log/<svc>.log
StandardError=append:/var/log/<svc>.error.log

[Install]
WantedBy=multi-user.target
```

Allow User to restart service with `sudo` and no password (needed for Github Action later on), and enable new service.

```bash
sudo touch /etc/sudoers.d/<svc>_deploy # creates file
echo /etc/sudoers.d/<svc>_deploy >> '<svc> ALL=(root) NOPASSWD: /usr/bin/systemctl restart <svc>.service' # writes rule to the file
sudo chmod 0440 /etc/sudoers.d/<svc>_deploy # sets read only rules
systemctl enable --now <svc>.service # enables service
```

## 6. Configuring `ssh`

Setup `ssh` key for the Github Action.

```bash
cd /home/<svc>/.ssh
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ./key # creates new key
mv key.pub authorized_keys
chmod 0600 authorized_keys
cat key # copy the contents of the private key and store it somewhere safe
rm key # deletes private key
```

## 7. Creating Github Action

Inside of a repository create `.github/workflows/deploy.yaml` file. It's content will be different from project to project. For example, it might look something like this:

```yaml
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check Out
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"

      - name: Use pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install Dependencies & Build
        run: |
          pnpm install --frozen-lockfile
          pnpm build
          pnpm prune --prod

      - name: Prepare SSH Key
        run: |
          mkdir -p ~/.ssh
          chmod 700 ~/.ssh
          echo "${{ secrets.ARTIFACT_SSH_KEY }}" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          ssh-keyscan -H -p 22 ${{ secrets.ARTIFACT_HOST }} >> ~/.ssh/known_hosts

      - name: Rsync Build to VPS
        run: |
          rsync -az --delete \
            --include='build/***' \
            --include='node_modules/***' \
            --include='package.json' \
            --include='.env-sample' \
            --exclude='*' \
            -e "ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no" \
            ./ ${{ secrets.ARTIFACT_USER }}@${{ secrets.ARTIFACT_HOST }}:/opt/<svc>/

      - name: Restart Service on VPS
        run: |
          ssh -i ~/.ssh/id_ed25519 \
            ${{ secrets.ARTIFACT_USER }}@${{ secrets.ARTIFACT_HOST }} \
            "sudo systemctl restart <svc>.service"
```

Setup secrets in "Github Repository > Settings > Security > Secrets and Variables". Push changes to the `main`.

## 8. Checking Status and Troubleshooting Errors

After the deployment, check the service availability.

```bash
sudo systemctl status <svc>.service
# or
curl http://localhost:<port>/healthcheck

# Check the log, if service failed to start
# sudo tail -n50 /var/log/<svc>.error.log
```

## Links

- [Keith Cirkel's playbook for hosting simple services](https://www.keithcirkel.co.uk/a-playbook-for-hosting-simple-services/)

