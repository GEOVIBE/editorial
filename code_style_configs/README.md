# Code Style Tools

## Formatter

We use _oxfmt_ to format our code. It is minimal and requires little to no configuration. Supports svelte and tailwind out of the box. There is no need for additional plugins.

To setup formatter run next commands and copy `.oxfmtrc.json` to the root of you project (adjust plugin list accordingly).

```bash
pnpm add -D oxfmt
```

Then add next scripts to your package json:

```json
{
	"scripts": {
		"fmt": "oxfmt",
		"fmt:check": "oxfmt --check",
	}
}
```

### Alphabetize CSS

_Oxfmt_ does not support linting css. If the project uses stylesheets you should add _Stylelint_ to alphabetize properties.

To setup _Stylelint_ run next commands and copy `stylelint.config.js` to the root of you project.

```bash
pnpm add -D stylelint stylelint-order postcss-html
```

Update scripts in `package.json`:

```json
{
	"scripts": {
		"fmt": "oxfmt && stylelint \"**/*.{css,scss,pcss,postcss,svelte,html,vue,astro}\" --fix"
	}
}
```

## Linter

For linting we use _oxlint_. It's fast, modern, comes with good defaults, and have default plugins which close most of the needs.

To setup _oxlint_ add it to the dev dependencies and copy `.oxlintrc.json` config to your root.

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

Install oxc plugin.
