<template>
    <div>
      <span>single layout</span>
      <AppNavigation />
      <hr>
      <nuxt />
      <nuxt-link to="/"> Back to Top</nuxt-link>
      <hr>
      <footer>
        footer
      </footer>
    </div>
</template>

<script>

import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>
