<template>
  <div>
    <SearchAlc
      v-on:searchAlcool="searchAlcool"
      v-on:filterAlcool="filter"
      v-on:AllAlcools="fetchAlcools"
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
          <div v-for="alcool in alcools" :key="alcool.id">
            <div
              class="
                w-full
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <router-link :to="{ name: 'Alcool', params: { id: alcool._id } }">
                <img
                  v-if="alcool.img"
                  :src="alcool.img"
                  :alt="alcool.cuvee"
                  class="
                    w-full
                    h-full
                    object-center object-cover
                    group-hover:opacity-75
                  "
              /></router-link>
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ alcool.cuvee }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ alcool.producteur }}
            </p>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ alcool.type }}
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
import SearchAlc from "../SearchAlc.vue";

export default {
    name:'alcoolList',
  components: { SearchAlc },
  beforeUnmount() {
    this.alcools.forEach((w) => {
      URL.revokeObjectURL(w.img);
    });
  },
  async created() {
    await this.$store.dispatch("alcools/fetchAlcools", 0);
  },
  computed: {
      alcools() {
      return this.$store.state.alcools.alcools;
    },
    pages() {
      return this.$store.state.alcools.pages;
    },
    request() {
      return this.$store.state.alcools.request;
    },
    type() {
      return this.$store.state.alcools.type;
    },
    searchWord() {
      return this.$store.state.alcools.searchWord;
    },
  },
  watch: {
    alcools: async function (w) {
      const self = this;
      const loadImg = async (prodId) => {
        return await fetch(`/api/alcools/${prodId}/image`).then(async (img) => {
          const imgBlob = await img.blob();
          const wI = self.alcools.findIndex((p) => p._id === prodId);
          self.alcools[wI].img = URL.createObjectURL(imgBlob);
        });
      };

      let lengthLoaded = -1;
      const deepLoad = async () => {
        lengthLoaded += 1;
        if (this.alcools[lengthLoaded]) {
          await loadImg(this.alcools[lengthLoaded]._id);
        }
        if (lengthLoaded < this.alcools.length) {
          deepLoad();
        }
      };
      deepLoad();
    },
  },
  methods: {
    async searchAlcool(type, query) {
      await this.$store.dispatch("alcools/SearchAlcool", [
        type,
        query.charAt(0).toUpperCase() + query.slice(1),
        0,
      ]);
    },
    async filter(query, value) {
      if (!query) {
        await this.$store.dispatch("alcools/FilterByType", [value, 0]);
      } else {
        return (this.$store.state.alcools.alcools = this.alcools.filter(
          (m) => m.type === value
        ));
      }
    },
    async fetchAlcools() {
      await this.$store.dispatch("alcools/fetchAlcools", 0);
    },
    async changePage(i) {
      if (this.request) {
        await this.$store.dispatch("alcools/FilterByType", [
          this.request,
          i * 24,
        ]);
      } else if (this.searchWord || this.type) {
        await this.$store.dispatch("alcools/SearchAlcool", [
          this.type,
          this.searchWord,
          i * 24,
        ]);
      } else {
        await this.$store.dispatch("alcools/fetchAlcools", i * 24);
      }
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
