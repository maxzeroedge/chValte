<script>
    let items = (Array.from(Array(50).keys())).map((item, indx) => {
        return {
            id: indx,
            value: Math.random()
        }
    })
    console.log(items)
</script>

<article>
    {#each items as item (item.id)}
        <div class="item-container">
            <div class="item-content">
                {item.value}
            </div>
        </div>
    {/each}
</article>


<style type="text/sass">
    article
        display: grid
        /* grid-template-rows: repeat(auto, 100px) */
        padding: 5px
        .item-container
            &:nth-child(2n+1)
                text-align: left
            &:nth-child(2n)
                text-align: right
            .item-content
                display: inline-grid
                align-content: center
                padding: 5px
                min-height: 100px
                border: solid thin grey
                border-radius: 5px
</style>