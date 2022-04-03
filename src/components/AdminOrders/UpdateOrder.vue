<template>
  <div>
    <Suspense>
      <div class="mt-10 h-screen mb-10">
        <div
          class="mx-60 ml-58 mr-16 mt-10 border-dashed border-2 border-gray-600"
          v-if="order"
        >
          <button class="rajout" @click.prevent="newWineInOrder">
            Rajouter un vin
          </button>
          <button class="rajout" @click.prevent="newAlcoolInOrder">
            Rajouter un alcool
          </button>
          <table class="table-auto mx-auto mt-5">
            <thead>
              <tr class="bg-gray-200">
                <th
                  class="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500 text-
                    uppercase
                    tracking-wider
                  "
                >
                  Cuvée
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500 text-
                    uppercase
                    tracking-wider
                  "
                >
                  Domaine
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Couleur / Type
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Quantité
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="wine in order.wines" :key="wine.id">
                <td class="apx-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ wine.cuvee }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ wine.domaine }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ wine.couleur }}</p>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    v-if="order.status != 'Validé'"
                    v-model="wine.quantite"
                    type="number"
                  />
                  <p v-else class="text-gray-500 text-sm">
                    {{ wine.quantite }}
                  </p>
                </td>

                <td v-if="order.status != 'Confirmed'">
                  <button
                    @click.prevent="
                      updateOrd(wine.cuvee, wine.couleur, wine.quantite)
                    "
                    class="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </td>
                <button @click.prevent="Delete(wine.wineId)" class="remove">
                  <td
                    class="px-6 py-4 whitespace-nowrap"
                    v-if="order.status != 'Confirmed'"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      stroke="red"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </button>
              </tr>
              <tr v-for="alcool in order.alcools" :key="alcool.id">
                <td class="apx-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ alcool.cuvee }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ alcool.centilitrage }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p class="text-gray-500 text-sm">{{ alcool.type }}</p>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    v-if="order.status != 'Validé'"
                    v-model="alcool.quantite"
                    type="number"
                  />
                  <p v-else class="text-gray-500 text-sm">
                    {{ alcool.quantite }}
                  </p>
                </td>
                <button
                  @click.prevent="DeleteAlc(alcool.alcoolId)"
                  class="remove"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap"
                    v-if="order.status != 'Confirmed'"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      stroke="red"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </button>
                <td v-if="order.status != 'Confirmed'">
                  <button
                    @click.prevent="
                      updateOrdAlc(alcool.cuvee, alcool.type, alcool.quantite)
                    "
                    class="text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="ml-5 mt-24 text-center text-sm">
            Commandé par : {{ order.userEmail }}
          </div>
          <button
            @click.prevent="confirm()"
            class="
              on
              ml-80
              mt-10
              mb-10
              hover:bg-blue-700
              py-2
              px-4
              rounded-full
              text-white
              center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              text-white
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
        <WinesAdm v-if="addWine && order.status != 'Validé'" />
        <AlcAdm v-if="addAlcool && order.status != 'Validé'" />
      </div>
    </Suspense>
  </div>
</template>

<script>
import WinesAdm from "../AdminWines/WinesAdm.vue";
import AlcAdm from "../AdminWines/AlcoolAdm.vue";

export default {
  name: "newOrder",
  components: {
    WinesAdm,
    AlcAdm,
  },
  data() {
    return {
      addWine: false,
      addAlcool: false,
    };
  },
  created() {
    this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
  },
  computed: {
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    async updateOrd(cuvee, couleur, quantite) {
      await this.$store.dispatch("orders/updateOrder", [
        this.$route.params.id,
        { cuvee: cuvee, couleur: couleur, quantite: quantite },
      ]);
      await this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
    },
    async updateOrdAlc(cuvee, type, quantite) {
      await this.$store.dispatch("orders/updateOrder", [
        this.$route.params.id,
        { cuvee: cuvee, type: type, quantite: quantite },
      ]);
      await this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
    },
    // search(query) {
    //   return order.filter((order) => {
    //     return this.order.wines.cuvee.indexOf(query) > -1;
    //   });
    // },
    async Delete(id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer ")) {
        await this.$store.dispatch("orders/delWine", [
          this.$route.params.id,
          { wineId: id },
        ]);
        await this.$store.dispatch(
          "orders/findOneOrder",
          this.$route.params.id
        );
      }
    },
    async DeleteAlc(id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer ")) {
        await this.$store.dispatch("orders/delWine", [
          this.$route.params.id,
          { alcoolId: id },
        ]);
        await this.$store.dispatch(
          "orders/findOneOrder",
          this.$route.params.id
        );
      }
    },
    async confirm() {
      if (this.order.status == "Validé") {
        console.log("nope");
        return;
      } else {
        if (
          confirm(
            "Attention, une fois validée, vous ne pourrez plus modifier le bon de commande."
          )
        ) {
          if (this.order.wines) {
            for (let i = 0; i < this.order.wines.length; i++) {
              const res = await fetch(
                "/api/wines/" + this.order.wines[i].wineId
              );
              const data = await res.json();
              const quantity = data.quantite;

              await this.$store.dispatch("wines/updateWine", [
                this.order.wines[i].wineId,
                {
                  quantite: quantity - this.order.wines[i].quantite,
                },
              ]);
            }
          }
          else if (this.order.alcools) {
            for (let i = 0; i < this.order.alcools.length; i++) {
              const res = await fetch(
                "/api/alcools/" + this.order.alcools[i].alcoolId
              );
              const data = await res.json();
              const quantity = data.quantite;

              await this.$store.dispatch("alcools/updateAlcool", [
                this.order.alcools[i].alcoolId,
                {
                  quantite: quantity - this.order.alcools[i].quantite,
                },
              ]);
            }
          }
          await this.$store.dispatch("orders/validateOrder", [
            this.$route.params.id,
            {
              status: "Validé",
            },
          ]);
        }
        this.$router.push("/Admin");
      }
    },
    newWineInOrder() {
      this.addWine = !this.addWine;
    },
    newAlcoolInOrder() {
      this.addAlcool = !this.addAlcool;
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}
.round {
  background-color: #2a574c;
  color: white;
}

.rajout {
  background-color: #2a574c;
  color: white;
  margin: 15px;
  width: 150px;
  height: 30px;
  border-radius: 25px;
}
</style>
