<script lang="ts">
import type { Category } from "@prisma/client";

    /** @type {import('./$types').PageData} */
    export let data: Category | null
</script>

<svelte:head>
	<title>Post List</title>
	<meta name="description" content="Post list for category {data ? data.name : ""}" />
</svelte:head>

<h1>{data ? data.name : "All Posts"}</h1>

<style lang="sass">

</style>