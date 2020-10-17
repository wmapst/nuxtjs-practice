<template lang="pug">
    div.footer-container
        div.footer-container-in
            footer(itemscope itemtype="https://schema.org/WPFooter")
                div.footer-in
                    div.footer-bottom-content
                        nav.navi-footer
                            div.navi-footer-in
                                ul.menu-footer
                                    li.menu-item
                                        a(href="https://www.wmapst.net/privacy-policy/") プライバシーポリシー
                                        

                    
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.footer-container
    background-color: #000
    margin-top: 20px
    padding-top: 10px

.footer-container a
    color: #FFF

.footer-container-in.hlt-top-menu
    display: flex
    justify-content: space-between
    align-items: center
    align-content: center

.footer-in
    display: flex
    flex-direction: column
    justify-content: center
    font-size: 16px;
    white-space: nowrap;

</style>