<template>
  <Suspense>
    <div class="md:pl-60 flex flex-col flex-1 mt-10">
      <SearchAlc
        v-on:searchAlcool="searchAlcool"
        v-on:filterAlcool="filter"
        v-on:AllAlcools="fetchAlcools"
      />
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto px-4 sm:px-6 md:px-8">
            <div class="flex flex-col">
              <div class="my-2 overflow-x-auto sm:-mx-center lg:-mx-center">
                <div
                  class="
                    py-2
                    align-middle
                    inline-block
                    min-w-full
                    sm:px-6
                    lg:px-8
                    text-center text-xs
                  "
                >
                  <div
                    class="
                      shadow
                      overflow-hidden
                      border-b border-gray-200
                      sm:rounded-lg
                      text-center text-xs
                    "
                  >
                    <div class="flex flex-col">
                      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div
                          class="
                            py-2
                            align-middle
                            inline-block
                            min-w-full
                            sm:px-6
                            lg:px-8
                            text-center text-xs
                          "
                        >
                          <div
                            class="
                              shadow
                              overflow-hidden
                              border-b border-gray-200
                              sm:rounded-lg
                              text-center text-xs
                            "
                          ></div>
                        </div>
                      </div>
                    </div>
                    <table class="w-full divide-y divide-gray-200">
                      <thead class="head bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Cuvée
                          </th>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Quantité
                          </th>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            PAHT
                          </th>

                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            PVC
                          </th>

                          <th
                            v-if="order && order._id"
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Commande
                          </th>

                          <th
                            v-if="order && order._id"
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Ajouter
                          </th>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Editer
                          </th>
                          <th
                            scope="col"
                            class="
                              px-6
                              py-3
                              text-center text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                              text-center text-xs
                            "
                          >
                            Supprimer
                          </th>
                        </tr>
                      </thead>
                      <!-- end of category bar -->
                      <tbody>
                        <tr v-for="alcool in alcools" :key="alcool.id">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500 text-center text-xs
                            "
                          >
                            <router-link
                              :to="{
                                name: 'Alcool',
                                params: { id: alcool._id },
                              }"
                            >
                              {{ alcool.cuvee }}
                            </router-link>
                          </td>

                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500 text-center text-xs
                            "
                          >
                            {{ alcool.quantite }}
                          </td>

                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500 text-center text-xs
                            "
                          >
                            {{ alcool.type }}
                          </td>

                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500 text-center text-xs
                            "
                          >
                            {{ alcool.prix }} €
                          </td>

                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500 text-center text-xs
                            "
                          >
                            {{ parseFloat(alcool.prix * 1.2).toFixed(2) }} €
                          </td>
                          <td v-if="order && order._id">
                            <input
                              v-model="quantite"
                              class="
                                appearance-none
                                block
                                text-center text-xs
                                bg-gray-200
                                text-gray-700
                                border border-gray-200
                                rounded
                                py-3
                                px-4
                                leading-tight
                                focus:outline-none
                                focus:bg-white
                                focus:border-gray-500
                              "
                              id="grid-zip"
                              type="number"
                              placeholder="0"
                            />
                          </td>
                          <td v-if="order && order._id">
                            <button
                              type="button"
                              class="
                                round
                                inline-flex
                                items-center
                                text-center text-xs
                                p-2
                                border border-transparent
                                rounded-full
                                shadow-sm
                                text-white
                                bg-#2a574c-600
                                hover:bg-#2a574c-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-offset-2
                                focus:ring-#2a574c-500
                              "
                              @click="
                                addToOrder(
                                  order._id,
                                  alcool._id,
                                  alcool.centilitrage,
                                  quantite
                                )
                              "
                            >
                              <PlusSmIconSolid
                                class="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </td>

                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              font-medium
                              text-center text-xs
                            "
                          >
                            <router-link
                              :to="{
                                name: 'UpdateAlcool',
                                params: { id: alcool._id },
                              }"
                            >
                              <button
                                class="
                                  text-xs
                                  whitespace-nowrap
                                  text-sm text-indigo-700
                                "
                              >
                                Editer
                              </button>
                            </router-link>
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-center
                            "
                          >
                            <button
                              class="text-red-600 hover:text-red-900"
                              @click.prevent="Delete(alcool.cuvee, alcool._id)"
                            >
                              Supprimer
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link
                      v-if="order && order._id"
                      :to="{
                        name: 'updateOrder',
                        params: { id: order._id },
                      }"
                      ><button class="text-gray-900">
                        Valider
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- /End replace -->
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
      </main>
    </div>
  </Suspense>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/vue/outline";
import SearchAlc from "../SearchAlc.vue";
import OrderDoing from "../AdminOrders/OrderDoing.vue";

export default {
  name: "AlcAdm",
  data() {
    return { quantite: Number };
  },
  components: {
    Multiselect,
    PlusSmIconOutline,
    PlusSmIconSolid,
    SearchAlc,
    OrderDoing,
  },
  async created() {
    this.$store.dispatch("alcools/fetchAlcools", 0);
  },
  computed: {
    alcools() {
      return this.$store.state.alcools.alcools;
    },
    order() {
      return this.$store.state.orders.order;
    },
    pages() {
      return this.$store.state.alcools.pages;
    },
    type() {
      return this.$store.state.alcools.type;
    },
    searchWord() {
      return this.$store.state.alcools.searchWord;
    },
    request() {
      return this.$store.state.alcools.request;
    },
    price() {
      return this.$store.state.alcools.price;
    },
  },
  methods: {
    toggle() {
      this.add = !this.add;
      this.dashboard = !this.dashboard;
    },

    async addToOrder(order, alcool, type, quantite) {
      await this.$store.dispatch("orders/addAlcoolToCommand", [
        order,
        { id: alcool, quantite: quantite, type: type },
      ]);
      this.quantite = "";
    },
    async searchAlcool(type, query) {
      if (type === "prix") {
        await this.$store.dispatch("alcools/AlcoolByPrice", [
          { prix: query },
          0,
        ]);
      } else {
        await this.$store.dispatch("alcools/SearchAlcool", [
          type,
          query.charAt(0).toUpperCase() + query.slice(1),
          0,
        ]);
      }
    },
    async fetchAlcools() {
      await this.$store.dispatch("alcools/fetchAlcools", 0);
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

    async Delete(name, id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer " + name)) {
        await this.$store.dispatch("alcools/deleteAlcool", id);
      }
    },
    async changePage(i) {
      if (this.request) {
        await this.$store.dispatch("alcools/FilterByType", [
          this.request,
          i * 24,
        ]);
      } else if (this.type === "prix") {
        await this.$store.dispatch("alcools/AlcoolByPrice", [
          this.price,
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

<style scoped>
.round {
  background-color: #2a574c;
  color: white;
}
.text {
  color: black;
}
.on {
  background-color: #2a574c;
}
</style>
