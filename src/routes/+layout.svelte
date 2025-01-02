<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let darkMode;

	onMount(() => {
		// Tarkista tallennettu teema tai järjestelmän teema
		darkMode = localStorage.theme === 'dark' || 
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		updateTheme();
	});

	function toggleTheme() {
		darkMode = !darkMode;
		updateTheme();
	}

	function updateTheme() {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}
</script>

<!-- Add Poppins font from Google Fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- Add Inter to the entire app -->
<div class="min-h-screen bg-white dark:bg-gray-900 dark:text-white font-poppins">
	<header class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
		<nav class="container py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="text-xl font-bold">Portfolio</a>
				
				<!-- Mobile menu button -->
				<button
					class="md:hidden p-2"
					on:click={() => isMenuOpen = !isMenuOpen}
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if isMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>

				<!-- Desktop menu -->
				<div class="hidden md:flex items-center space-x-8">
					<a href="/#about" class="hover:text-blue-600">About</a>
					<a href="/#projects" class="hover:text-blue-600">Projects</a>
					<a href="/#skills" class="hover:text-blue-600">Skills</a>
					<a href="/#contact" class="hover:text-blue-600">Links</a>
				</div>
			</div>

			<!-- Mobile menu -->
			{#if isMenuOpen}
				<div class="md:hidden pt-4 pb-2 space-y-4">
					<a href="/#about" class="block hover:text-blue-600">About</a>
					<a href="/#projects" class="block hover:text-blue-600">Projects</a>
					<a href="/#skills" class="block hover:text-blue-600">Skills</a>
					<a href="/#contact" class="block hover:text-blue-600">Links</a>
				</div>
			{/if}
		</nav>
	</header>

	<main class="pt-16">
		<slot />
	</main>

	<footer class="bg-gray-100 dark:bg-gray-800">
		<div class="container py-8">
			<p class="text-center text-gray-600 dark:text-gray-400">
				© {new Date().getFullYear()} Joonas Salmela. All rights reserved.
			</p>
		</div>
	</footer>
</div>
