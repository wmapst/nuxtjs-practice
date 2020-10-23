<template lang="pug">
    div.wp-sidebar
        h2.wp-sidebar-title タグ
        div.wp-sidebar-tags
            div.wp-sidebar-tag(v-for="itemTag in itemTags" v-if="itemTag.count > 0")
                a-tag.wp-sidebar-tag
                    nuxt-link(:to="{name: 'tag-tagId', params:{tagId: itemTag.id}}") {{itemTag.name}} ({{itemTag.count}})

</template>

<script>
export default {
    data() {
        return {
        itemTags: [],
        itemCategories: [],
        error: false,
        }
    },
    computed: {

    },
    methods: {
        //Tag取得
        setItemTags(res) {
            this.itemTags = res
        },
        //Tag取得
        setItemCategories(res) {
            this.itemCategories = res
        },
        setError(err) {
            console.log(err)
            this.error = true
        },
    },
    created() {
        this.$axios.$get('/tags?per_page=100')
        .then(this.setItemTags)
        .catch(this.setError)

        this.$axios.get('/categories?per_page=100')
        .then(this.setItemCategories)
        .catch(this.setError)
    },
    filters: {

    },
}
</script>

<style lang="stylus" scoped>
.wp-sidebar
    display: block
    margin: 10px
    width: 300px
    height: 100%

.wp-sidebar-title
    font-size: 20px
    margin: 0px 0px 10px 0px
    padding: 0px 0px 6px 0px
    border-bottom: solid 1px #000000

.wp-sidebar-tags
    display: block

.wp-sidebar-tag
    display: inline-flex
    margin: 0 1px

</style>
