<script lang="ts">
	import { page } from '$app/stores'
	import type { Category } from '@prisma/client'

	export let categories: Array<Category>
</script>

<header>
	<nav>
		<div aria-label="navigate home" class="brand" class:active={$page.url.pathname === '/'}>
			<a sveltekit:prefetch href="/">Svelte Blog</a>
		</div>
		<ul aria-label="categories">
			{#each categories as {id, name}}
			<li class:active={$page.url.pathname === `/list?category=${id}`}>
				<a sveltekit:prefetch href={`/list?category=${id}`}>{name}</a>
			</li>
			{/each}
		</ul>
		<ul class="nav-utility">
			<li class:active={$page.url.pathname === '/create'}>
				<a sveltekit:prefetch href='/create'>⚒️ Create</a>
			</li>
			<li class:active={$page.url.pathname === '/login'}>
				<a sveltekit:prefetch href='/login'>🔑 Login</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="sass">
	@use '../sass/shared.sass'

	nav
		background-color: shared.$secondary-color
		width: 100%
		height: shared.$navbar-height
		top: 0
		left: 0

		position: fixed
		display: flex
		justify-content: space-between

		.brand
			padding: .5rem
			
			a
				font-size: 1.5rem
		
		.nav-utility
			padding-right: .5rem

		a
			color: shared.$primary-color
			text-decoration: none
			padding: 1rem
			font-size: 1rem

			// Default position
			position: relative
			font-weight: 300
			transition: font-weight .4s ease


		// On fade
		a:hover
			font-weight: 900



		

	li
		display: inline-block

	
	
</style>
