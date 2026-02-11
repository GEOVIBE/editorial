# Code Style Tools

## Formatter

We use prettier to format our code, because at the moment only it supports all of the technologies that we use (tailwind, svelte).

To setup prettier run next commands and copy `.prettierrc.json` to the root of you project (adjust plugin list accordingly).

```bash
pnpm add -D prettier @prettier/plugin-oxc @ianvs/prettier-plugin-sort-imports prettier-plugin-packagejson
```

For svelte add:

```bash
pnpm add -D prettier-plugin-svelte
```

For vanilla css:

```bash
pnpm add -D prettier-plugin-css-order
```

For tailwind:

```bash
pnpm add -D prettier-plugin-tailwindcss
```

Then add next scripts to your package json:

```json
{
	"scripts": {
		"fmt": "prettier --write --experimental-cli",
		"fmt:check": "prettier . --experimental-cli",
	}
}
```

## Linter

For linting we use oxlint. It's fast, modern, comes with good defaults, and have default plugins which close most of the needs.

To setup oxlint add it to the dev dependencies and copy `.oxlintrc.json` config to your root.

```bash
pnpm add -D oxlint
```

Add linting scripts:

```json
{
	"scripts": {
		"lint": "oxlint",
		"lint:fix": "oxlint --fix",
	}
}
```

## Editors

### VSCode

Install oxc and prettier plugins.
