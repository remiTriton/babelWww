<template>
  <div class="loo">
    <div>
      <nav class="grid-cols-3">
        <div class="lg:flex lg:items-center ">
          <div class="text-sm relative">
            <router-link to="/WineList" class="text-teal-200 hover:text-white">
              <img class="bb" src="../assets/Arches.png" atl="Babel Wines" />
            </router-link>
          </div>
<div class="flex ">
          <div class="space-x-4 mr-28">
              <router-link
                v-if="!auth"
                to="/login"
                class="
                  inline-block
                  text-sm
                  px-4
                  py-2
                  leading-none
                  border
                  rounded
                  text-white
                  border-white
                "
                >Se connecter</router-link
              >

              <router-link
                v-if="!auth"
                to="/register"
                class="
                  inline-block
                  text-sm
                  px-4
                  py-2
                  leading-none
                  border
                  rounded
                  text-white
                  border-white
                "
                >S'enregistrer</router-link
              >
              <button
                v-if="auth"
                class="
                  inline-block
                  text-sm
                  px-4
                  py-2
                  leading-none
                  border
                  rounded
                  text-white
                  border-white
                "
                @click.prevent="logout"
              >
                Se déconnecter
              </button>

              <router-link
              v-if="auth?.user?.role === 'Admin'"
                to="/Admin"
                class="
                  inline-block
                  text-sm
                  px-4
                  py-2
                  leading-none
                  border
                  rounded
                  text-white
                  border-white
                  hover:border-transparent hover:text-teal-500 hover:bg-white
                  lg:mt-0
                "
                >Admin</router-link
              >
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    auth() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      await this.$router.push("/");
    },
  },
};
</script>

<style>
.loo {
  
  background-color: #2a574c;
 
  justify-content: space-around;
}
.bb {
  width: 150px;
  height: 150px;
}
.log {
  margin-right: 100px;
}
</style>
