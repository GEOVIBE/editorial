# Install Nodejs on Production Machine (Linux)

1. Make sure you have _curl_ with `curl --version` installed, if not run:

    ```bash
    sudo apt install curl 
    ```

1. Install _n_ minimal node version manager with following commands:

    ```bash
    curl -L https://bit.ly/n-install | bash
    ```

1. Install _node_ lts version with a version manager:

    ```bash
    n lts
    ```
1. Make sure that _node_ is avaliable with a `node -v` command.

