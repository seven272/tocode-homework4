<template>
<h2>Все пользователи</h2>
<p>{{ getUsersLength }}</p>
  <ul>
    <li v-for="(user, ind) in getAllUsers" :key="ind">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Это обычный пользователь' }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    getUsersLength () {
      return this.$store.getters.getUsersLength
    },
    getAllUsers () {
      return this.$store.getters.getAllUsers
    }
  }

}
</script>

<style>

</style>
