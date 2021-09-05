<script>
    let items = (Array.from(Array(20).keys())).map((item, indx) => {
        return {
            id: indx,
            name: Math.random(),
            image: `https://avatars.dicebear.com/api/pixel-art-neutral/${item}.svg`
        }
    })
</script>

<article>
    {#each items as item (item.id)}
        <div class="chat-card-item">
            <div class="chat-card-avatar" style={'background-image: url("' + item.image +'")'}></div>
            <div class="chat-card-name">{item.name}</div>
        </div>
    {/each}
</article>


<style type="text/sass">
    article
        display: grid
        /* grid-template-rows: repeat(auto, 100px) */
        padding: 5px
        .chat-card-item
            display: grid
            align-items: center
            grid-template-columns: 50px 1fr
            .chat-card-avatar
                width: 40px
                height: 40px
                background-size: contain
                margin: 5px
            .chat-card-name
                font-size: 0.8em
</style>