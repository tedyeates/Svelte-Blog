<script lang="ts">
    import type { Category } from "@prisma/client";

    /** @type {import('./$types').PageData} */
    export let data: Category | undefined
    console.log(data)
</script>

<svelte:head>
	<title>Post List</title>
	<meta name="description" content='Post list {data && data.name ? `for category ${data.name}` : 'all posts' }' />
</svelte:head>

<header>
    <h1>{data && data.name ? data.name : "All Posts"}</h1>
</header>

<style lang="sass">

</style>