<script>
	import '../app.postcss';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Mikrofabriken Badgenator</title>
</svelte:head>

<slot />
