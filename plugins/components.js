import Vue from 'vue'

import blogHeader from '~/components/layout/Header.vue'
import blogFooter from '~/components/layout/Footer.vue'

Vue.mixin(
    {
        components: {
            blogHeader,
            blogFooter
        }
    }
)