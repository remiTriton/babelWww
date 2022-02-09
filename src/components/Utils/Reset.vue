<template>
  <div
    class="
      h-screen
      flex
      items-center
      justify-center
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full border border-green-500  space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Changer votre mot de passe
        </h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-8">
            <p class="text-gray-700">Nouveau mot de passe :</p>
            <label for="New Password" class="sr-only">Mot de passe</label>
            <input
              id="New Password"
              v-model="password"
              name="New Password"
              type="password"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Mot de Passe"
            />
          </div>
          <div>
            <p class="text-gray-700">Confirmer mot de passe :</p>

            <label for="password" class="sr-only">Mot de passe</label>
            <input
              id="password"
              name="password"
              v-model="confirmpassword"
              type="password"
              autocomplete="current-password"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Mot de passe"
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="validatePassword(password, confirmpassword)"
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-green-500
              hover:bg-green-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Valider
          </button>
        </div>
      </form >
    </div>
  </div>
</template>

<script>
export default {
  name: "Reset",
  data() {
    return {
      password: "",
      confirmpassword: "",
    };
  },
  methods: {
    async validatePassword(password, newpassword) {
      if (password != newpassword) {
        alert("Mots de passes différents, veuillez réessayer");
      } else {
        await this.$store.dispatch("auth/newPassword", [
          this.$route.params.id,
          this.$route.params._id,
          {
            password: password,
          },
        ]);
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
</style>
