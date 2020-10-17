<template lang="pug">
    div.contents-container
        main.main-container(itemscope itemtype="https://schema.org/Blog")
            div.wp-contents
                div(v-for="item in items")
                    a.wp-link(:href="item.link" target="_blank")
                        article.wp-article
                            figure.wp-imagebox(v-if="item._embedded['wp:featuredmedia']")
                                img.wp-image(:src="item._embedded['wp:featuredmedia'][0].source_url" alt="")
                            div.wp-caption
                                h3.wp-title {{ item.title.rendered }}
                                p.wp-description {{ item.excerpt.rendered }}
                                p.wp-date {{ item.date | moment }}
            a-pagination(:current="current" :total="itemTotal" @change="onChange" :page-size="pageSize")
</template>

<script>
export default {
    data() {
        return {
        items: [],
        itemTotal: 1,
        current: 1,
        pageSize: 10,
        }
    },
    methods: {
        //ページング切り替え
        onChange(current) {
            this.current = current
            this.$router.push(
                {path: `/page/${current}`}
            )
        },
    },
    validate({ params }) {
        return /^\d+$/.test(params.pageNumber)
    },
    filters: {
        moment: function (date) {
            return date.replace('T',' ')
        }
    },
    async asyncData({ $axios, params }) {
        return await $axios.get('https://www.wmapst.net/wp-json/wp/v2/posts?_embed', {
            params: {
                page: params.pageNumber,
                per_page: 10
            }
        })
        .then(response => {
                return { 
                    items: response.data,
                    itemTotal: Number(response.headers['x-wp-total']),
                    current: Number(params.pageNumber),
                 }
            })
    }
}
</script>

<style lang="stylus" scoped>
.contents-container
    display: flex
    margin: 10px

.main-container
    height: auto
    max-width: 800px
    margin: 0.5%
    background-color: #FFFFFF
    display: block

.wp-contents
    background-color: #FFFFFF
    display: block

.wp-link
    margin: 10px 10px 10px 10px
    display: block
    border: 1px solid #dddddd
    text-decoration: none
    color: #333
    padding: 1.5%

.wp-article
    position: relative
    height: 100%
    display: inline-block

.wp-imagebox
    width: 320px
    float: left

.wp-image
    max-width: 100%
    border: 1px solid #dddddd
    height: auto

.wp-caption
    margin-left: 330px

.wp-title
    font-size: 18px
    margin: 0 0 5px 0
    line-height: 1.2
    font-weight: bold

.wp-description
    font-size: .8em
    line-height: 1.3

.wp-date
    font-size: .8em

</style>