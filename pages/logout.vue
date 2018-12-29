<template>
    <div>
      <h2>logout</h2>
      <p>
        <button type="button" @click="logout">Logout</button><br>
      </p>
      <p>
        <nuxt-link to ='/'>Back to TOP</nuxt-link>
      </p>
    </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  methods: {
    logout() {
      const cookies = new Cookies()
      cookies.set('credential', 'false')
      this.$router.push('login')
    }
  }
}
</script>
