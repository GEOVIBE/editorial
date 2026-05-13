export default {
	plugins: ["stylelint-order"],
	rules: {
		"order/properties-alphabetical-order": true,
	},
	overrides: [
		{
			files: ["**/*.{svelte,html,vue,astro}"],
			customSyntax: "postcss-html",
		},
	],
};
