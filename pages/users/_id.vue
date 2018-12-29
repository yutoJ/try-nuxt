<template>
  <section class="container">
    <div>
      <h3>{{user.id}}</h3>
      <img :src="user.profile_image_url" width="120" alt="">
      <p>{{user.description || 'No description'}}</p>
      <p>
        <nuxt-link to="/">
          <small><b>Back to TOP</b></small>
        </nuxt-link>
      </p>
      <h3>{{user.id}}'s post</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{item.title}}</span>
          </h4>
          <div>{{item.body.slice(0,130)}}......</div>
          <p>
            <a :href="item.url">{{item.url}}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters['users'][route.params.id]) {
      return
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.id })
    } catch(e) {
      redirect('/')
    }
  },
  computed: {
    user() {
      return this.users[this.$route.params.id]
    },
    items() {
      return this.userItems[this.$route.params.id] || []
    },
    ...mapGetters(['users', 'userItems'])
  }
}
</script>
