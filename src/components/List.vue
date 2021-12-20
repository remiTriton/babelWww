<template>
  <div>
    <SearchB
      v-on:searchWine="search"
      v-on:color="filter"
      v-on:allWines="fetchWines"
    />
    <div class="list bg-white">
      <div
        class="
          max-w-2xl
          mx-auto
          py-16
          px-4
          sm:py-24 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <div
          class="
            grid grid-cols-1
            gap-y-10
            sm:grid-cols-2
            gap-x-6
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-x-8
          "
        >
          <div v-for="wine in wines" :key="wine.id">
            <div
              class="
                w-full
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
              v-if="wine._id"
            >
              <router-link :to="{ name: 'Print', params: { id: wine._id } }">
                <img
                  v-if="wine.img"
                  :src="wine.img"
                  :alt="wine.cuvee"
                  class="
                    w-full
                    h-full
                    object-center object-cover
                    group-hover:opacity-75
                  "
              /></router-link>
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ wine.cuvee }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ wine.domaine }}
            </p>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ wine.millesime }}
            </p>
          </div>
        </div>
      </div>
      <div class="pages m-10">
        <button
          v-for="(page, i) in pages"
          :key="i"
          class="text-gray-700 m-5 page"
          @click="changePage(i)"
        >
          {{ i + 1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchB from "./SearchB.vue";

export default {
  components: { SearchB },
  data() {
    return {};
  },
  beforeUnmount() {
    this.wines.forEach((w) => {
      URL.revokeObjectURL(w.img);
    });
  },
  async created() {
    await this.$store.dispatch("wines/fetchWines", 0);
  },
  computed: {
    wines() {
      return this.$store.state.wines.wines;
    },
    pages() {
      return this.$store.state.wines.pages;
    },
    request(){
      return this.$store.state.wines.request;
    }
  },
  watch: {
    wines: async function (w) {
      const self = this;

      const loadImg = async (prodId) => {
        return await fetch(`/api/wines/${prodId}/image`).then(async (img) => {
          const imgBlob = await img.blob();
          const wI = self.wines.findIndex((p) => p._id === prodId);
          self.wines[wI].img = URL.createObjectURL(imgBlob);
        });
      };

      let lengthLoaded = -1;
      const deepLoad = async () => {
        lengthLoaded += 1;
        if (this.wines[lengthLoaded]) {
          await loadImg(this.wines[lengthLoaded]._id);
        }
        if (lengthLoaded < this.wines.length) {
          deepLoad();
        }
      };
      deepLoad();
    },
  },
  methods: {
    async search(type, query) {
      await this.$store.dispatch("wines/searchWinesByName", [
        type,
        query.charAt(0).toUpperCase() + query.slice(1),
      ]);
    },
    async filter(query, value) {
      if (!query) {
        await this.$store.dispatch("wines/searchWinesByColor",[value, 0]);
      } else {
        return (this.$store.state.wines.wines = this.wines.filter(
          (m) => m.couleur === value
        ));
      }
    },
    async fetchWines() {
      await this.$store.dispatch("wines/limitWines", 0);
    },
    async changePage(i) {
     if(!this.request){ await this.$store.dispatch("wines/limitWines", i * 24);}
     else{await this.$store.dispatch('wines/searchWinesByColor', [ this.request,i *24])}

    },
  },
};
</script>

<style>
.bbl {
  background-color: #2a574c;
  text-decoration-color: #2a574c;
}

.test {
  border-color: #2a574c;
  color: #2a574c;
}

.container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  font-size: large;
}

.pages {
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.page {
  color: #2a574c;
}

.back {
  color: white;
}
</style>
