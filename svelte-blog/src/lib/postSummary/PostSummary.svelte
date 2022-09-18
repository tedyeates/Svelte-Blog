<script lang="ts">
import { dateToWord } from "$lib/format/dates";


    type MedalType = {
        name: string
        icon: string
    }

    export let src: string
    export let alt: string

    export let title: string
    export let medals: Array<MedalType>
    
    export let views: number
    export let lastUpdated: Date
    export let author: {name: string}
</script>

<article aria-label='blog post'>
    <img {src} {alt} width=500 height=500 />
    <div class="summary-content">
        <header>
            <div class='medals' aria-label='medals'>
                <div>
                    {#each medals as {name, icon}}
                        <span aria-label='{name}' title='{name}'>{icon}</span>
                    {/each}
                </div>
                <div class='views-container'>
                    <span aria-label='views' title='views'>👀</span>
                    <span class='views'>{views}</span>
                </div>
            </div>
            <h1 class="post-title" aria-label='post title'>{title}</h1>
        </header>
        <footer aria-label='extra information'>
            <p>
                Last updated
                <time datetime='{lastUpdated.toString()}'>{dateToWord(lastUpdated)}</time>
                by {author.name}
            </p>
        </footer>
    </div>
</article>

<style lang="sass">
    %flex-column
        display: flex
        flex-direction: column

    h1, p
        margin: 3px 2px

    img
        border-radius: 5px


    article
        display: inline-flex
        border: 1px solid lightgray
        border-radius: 5px
        justify-content: center
        align-items: center

        .summary-content
            @extend %flex-column
            position: absolute
            background:  rgba(255, 255, 255, .8)
            padding: 1rem 1rem
            width: 250px
            
            font-size: 1.2rem

            header
                @extend %flex-column

                .medals
                    display: flex
                    justify-content: space-between

                .views
                    font-size: .9rem


                .post-title
                    font-size: 2rem

        

            footer
                display: flex
                margin-top: auto
                font-size: .8rem
                

</style>