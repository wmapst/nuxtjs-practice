<template lang="pug">
    div.header-container
        div.header-container-in
            header(itemscope itemtype="https://schema.org/WPHeader")
                div.header-in(itemscope itemtype="https://schema.org/WebSite")
                    h1.logo
                        a.site-name(href="https://www.wmapst.net/" itemprop="url" target="_blank")
                            span.site-name-text(itemprop="name about")
                                img.site-logo-image(src="https://www.wmapst.net/wp-content/uploads/2015/06/wmapp_logo.png" alt="Web Marketing and Programming")
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.header-container
    background-color: #000

.header-container-in.hlt-top-menu
    display: flex
    justify-content: space-between
    align-items: center
    align-content: center

.header-in
    display: flex
    flex-direction: column
    justify-content: center

.site-name
    margin: 0

.site-name-text
    font-size: 22px;
    white-space: nowrap;

</style>