<template lang="pug">
router-view.grow(v-if="$route.name === 'home'")
documentation(v-else)
</template>

<script>
import Documentation from '@/documentation/index.vue'

export default {
  components: { Documentation },

  created () {
    this.$store.commit('initUsePug')
    this.$store.commit('initTabsView')
  }
}
</script>
