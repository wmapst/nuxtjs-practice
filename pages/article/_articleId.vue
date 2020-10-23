<template lang="pug">
    div
        div {{ item.id }}
            div {{ item.title.rendered }}
</template>

<script>
export default {
    data() {
        return {
        item: [],
        }
    },
    async asyncData({ $axios, params }) {
        return await $axios.get('/posts/' + params.articleId, {
            params: {
                page: params.pageNumber,
                per_page: 10
            }
        })
        .then(response => {
                return {
                    item: response.data,
                 }
            })
    }
}
</script>

<style lang="stylus" scoped>

</style>