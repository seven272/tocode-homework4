<template>
<br>
<br>
<div v-if="isUserLogged">
  <p>User is logged</p>
  {{ user }}
</div>
<div v-else>
  <button @click="handleLoginClick" class="btn btnPrimary">LOGIN</button>
</div>
<br>
<br>
<h1>Только обычные пользователи</h1>
  <ul>
    <li v-for="(user, ind) in getUsers" :key="ind">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Это обычный пользователь' }}</p>
    </li>
  </ul>
  <br>
  <br>
  {{ getUser }}
  <br>
  <br>
  <input type="number" v-model="userId">
</template>

<script>
export default {
  data () {
    return {
      userId: 3

    }
  },
  methods: {
    handleLoginClick () {
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLogged
    },
    user () {
      return this.$store.getters.getUser
    },
    getUsers () {
      return this.$store.getters.getUsers
    },
    getUser () {
      return this.$store.getters.getUserById(this.userId) || 'Пользователь не найден'
    }

  }

}
</script>

<style>

</style>
