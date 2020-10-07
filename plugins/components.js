import Vue from 'vue'

import blogHeader from '~/components/Header.vue'
import articleCard from '~/components/articleCard.vue'

Vue.mixin({
    components: {
        blogHeader,
        articleCard
    }
  })