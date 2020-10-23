<template lang="pug">
    div.contents-container
        main.main-container(itemscope itemtype="https://schema.org/Blog")
            div.wp-contents
                div.wp-content(v-for="item in items")
                    nuxt-link.wp-link(:to="{name: 'article-articleId', params:{articleId: item.id}}")
                        article.wp-article
                            figure.wp-imagebox(v-if="item._embedded['wp:featuredmedia']")
                                img.wp-image(:src="item._embedded['wp:featuredmedia'][0].source_url" alt="" width="320" height="180" sizes="(max-width: 320px) 100vw, 320px")
                            div.wp-caption
                                h3.wp-title {{ item.title.rendered }}
                                p.wp-description {{ item.excerpt.rendered | ignoreHtml }}
                                p.wp-date {{ item.date | moment }}
            div.wp-pagination-container
                a-pagination.wp-pagination(:current="current" :total="itemTotal" @change="onChange" :page-size="pageSize")
        aside.sidebar-container
            blogSidebar
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
    filters: {
        moment: function (date) {
            return date.replace('T',' ')
        },
        ignoreHtml: function (httpText) {
            return httpText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace('[&hellip;]', '...')
        },
    },
    async asyncData({ $axios }) {
        return await $axios.get('/posts?_embed', {
            params: {
                page: 1,
                per_page: 10
            }
        })
        .then(response => {
                return { 
                    items: response.data,
                    itemTotal: Number(response.headers['x-wp-total'])
                 }
            })
    },
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

.wp-content
    display: inline-block

.wp-contents
    max-width: 800px
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

.wp-pagination-container
    display: inline-block
    margin: 10px 0 10px 0
    text-align: center
    width: 100%

.wp-pagination
    margin: 0 auto

.sidebar-container
    margin: 0.5%
    background-color: #fff
    display: block

</style>