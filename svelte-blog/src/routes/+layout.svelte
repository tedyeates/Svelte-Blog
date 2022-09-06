<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: {categories: Array<Category>}
	
	import type { Category } from '@prisma/client'
	import Header from '$lib/header/Header.svelte'
	import '../app.sass'
</script>

<Header categories={data.categories} />

<main>
	<slot />
</main>

<style lang="sass">
	@use '../lib/sass/shared.sass'

	main
		margin-top: shared.$navbar-height
</style>
