import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui, typography],
	daisyui: {
		themes: ['corporate', 'business'],
		logs: false,
		darkTheme: 'business'
	}
} satisfies Config;
