<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="
        flex-1 flex flex-col
        justify-center
        py-12
        px-4
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
    >
      <div class="mx-auto w-full max-w-sm lg:w-96 mb-60">
        <div>
          <h2 v-if="!val" class="mt-6 text-3xl font-extrabold text-gray-900">
            Connectez-vous à votre compte
          </h2>
          <h2 v-if="val" class="mt-6 text-3xl font-extrabold text-gray-900">
            Veuillez saisir votre adresse email pour réinitialiser votre mot de
            passe
          </h2>
        </div>

        <div class="mt-8">
          <div>
            <div></div>
            <div class="mt-6 relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Remplissez vos informations
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form @submit.prevent.stop class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div class="mt-1">
                  <input
                    v-model="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      text-black
                    "
                  />
                </div>
              </div>

              <div class="space-y-1" v-if="!val">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <div class="mt-1">
                  <input
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      text-black
                    "
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm">
                  <div
                    @click="toggleVal"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe oublié ?
                  </div>
                </div>
              </div>

              <div>
                <button
                  v-if="!val"
                  class="
                    But
                    bg-blue
                    hover:bg-dark
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                  type="submit"
                  @click="Log"
                >
                  Se Connecter
                </button>

                <button
                  v-if="val"
                  class="
                    But
                    bg-blue
                    hover:bg-dark
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                  type="submit"
                  @click="send(email)"
                >
                  Envoyer un mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="../assets/ter.png"
        alt="Connection"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Log",
  data() {
    return {
      email: "",
      password: "",
      val: false,
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async Log() {
      const logger = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("auth/login", logger);
      if (this.auth.user.role === "Admin") {
        this.$router.push("/Admin");
      } else {
        this.$router.push("/WineList");
      }
    },
    toggleVal() {
      this.val = !this.val;
    },
    async send(email) {
      await this.$store.dispatch("auth/forgottenPassword", { email: email });
      this.val = false;
    },
  },
};
</script>

<style scoped>
.img {
  justify-content: center;
}
.But {
  background-color: #2a574c;
}
</style>