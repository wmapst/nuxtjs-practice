<template lang="pug">
    div.header-container
        div.header-container-in
            header(itemscope itemtype="https://schema.org/WPHeader")
                div.header-in(itemscope itemtype="https://schema.org/WebSite")
                    h1.logo
                        nuxt-link.site-name(to="/" itemprop="url")
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
    max-width: 1000px
    display: flex
    justify-content: space-between
    align-items: center
    align-content: center

.header-in
    margin: 0 auto
    display: block
    flex-direction: column
    justify-content: center

.site-name
    margin: 0

.site-name-text
    font-size: 22px;
    white-space: nowrap;

</style>