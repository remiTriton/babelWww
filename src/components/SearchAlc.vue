<template>
  <div>
    <div class="container flex flex-col md:text-center mt-10">
      <div class="resp">
        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white
              font-bold
              br-5
              rounded
              border-2 border-light-blue-500 border-opacity-20
            "
            @click="getAllAlcools()"
          >
            Tous
          </button></span
        >
        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white border-2 border-light-blue-500 border-opacity-20
            "
            @click="filterAlcool('Anise', query)"
          >
            Anise Mediterranée
          </button></span
        >

        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white border-2 border-light-blue-500 border-opacity-20
            "
            @click="filterAlcool('Spiritueux', query)"
          >
            Spiritueux
          </button></span
        >

        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white border-2 border-light-blue-500 border-opacity-20
            "
            @click="filterAlcool('Apéritifs', query)"
          >
            Apéritifs
          </button></span
        >

        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
            "
            @click="filterAlcool('Sherry', query)"
          >
            Sherry
          </button></span
        >

        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white border-2 border-light-blue-500 border-opacity-20
            "
            @click="filterAlcool('Digestifs', query)"
          >
            Digestifs Liqueurs
          </button></span
        >

        <span>
          <button
            class="
              test
              w-35
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              focus:outline-none focus:bg-green-900
              bg-transparent
              font-bold
              br-5
              rounded
              inline-block
              text-xl
              px-4
              py-2
              leading-none
              border
              rounded
              border-white border-2 border-light-blue-500 border-opacity-20
            "
            @click="filterAlcool('Soft', query)"
          >
            Soft
          </button></span
        >
      </div>
      <div class="flex flex-col items-center text-black">
        <div class="left" @submit.prevent.stop>
          <button type="submit" @click.prevent="searchAlcool(type, query)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            v-on:keyup.enter="searchAlcool(type, query)"
            type="text"
            name="name"
            placeholder="Search..."
            v-model="query"
            class="
              w-/10
              py-2
              border-b-2 border-gray-400
              outline-none
              focus:border-green-400
              rounded-3xl
              ml-5
            "
          />
          <div class="mt-4">
            <div class="mt-2">
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="cuvee"
                />
                <span class="text-gray-500 ml-2">Cuvée</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="centilitrage"
                  v-model="type"
                />
                <span class="text-gray-500 ml-2">Centilitrage</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="producteur"
                  v-model="type"
                />
                <span class="text-gray-500 ml-2">Producteur</span>
              </label>

              <label
                class="inline-flex items-center ml-6"
                v-if="auth && auth.user.role != 'Serveur'"
              >
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="prix"
                />
                <span class="text-gray-500 ml-2">Prix</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAlc",
  data() {
    return {
      query: "",
      type: "",
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    searchAlcool(type, query) {
      this.$emit("searchAlcool", type, query);
    },
    filterAlcool(query, type) {
      this.$emit("filterAlcool", type, query);
    },
    getAllAlcools() {
      this.$emit("AllAlcools");
    },
  },
};
</script>

<style scoped>
.bbl {
  background-color: #2a574c;
  text-decoration-color: #2a574c;
}

.test {
  border-color: #2a574c;
  color: #2a574c;
  margin-left: 50px;
}

.test:focus {
  border-color: #2a574c;
  color: white;
  margin-left: 50px;
}

.container {
  display: flex;
  justify-content: space-evenly;
  font-size: large;
}

.back {
  color: #2a574c;
  float: right;
  position: relative;
}
.left {
  margin-top: 50px;
}
.resp {
  flex-wrap: wrap;
}
</style>