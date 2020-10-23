import Vue from 'vue'

import blogHeader from '~/components/layout/Header.vue'
import blogFooter from '~/components/layout/Footer.vue'
import blogSidebar from '~/components/parts/sideBar.vue'

Vue.mixin(
    {
        components: {
            blogHeader,
            blogFooter,
            blogSidebar,
        }
    }
)