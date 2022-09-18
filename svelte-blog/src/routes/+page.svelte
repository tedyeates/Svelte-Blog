<script lang="ts">
import PostSummary from "$lib/postSummary/PostSummary.svelte";

let date = new Date()
date.setDate(date.getDate() - 15)

</script>

<svelte:head>
	<title>Home Page</title>
	<meta name="description" content="Svelte Blog" />
</svelte:head>

<section aria-label="hottest posts">
	<PostSummary 
		src="https://images.immediate.co.uk/production/volatile/sites/30/2020/04/strawberry-cake-8c9a6b6.jpg?resize=960,872?quality=90&webp=true&resize=375,341"
		alt="Strawberry Cake"
		title="How to bake a cake"
		medals={[{name: "hottest", icon: "🔥"}, {name: "latest", icon: "⏰"}]}
		views={100}
		lastUpdated={date}
		author={{name: "Ted Yeates"}}
	/>
</section>
<section aria-label="latest posts">

</section>


<style>
	
</style>
