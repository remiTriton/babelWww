<template>
  <div class="md:pl-64 flex flex-col flex-1 h-screen">
    <main class="flex-1">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
                "
              >
                <div
                  class="
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                    sm:rounded-lg
                  "
                >
                  <p
                    class="
                      mb-10
                      text-gray-500 text-xs
                      font-bold
                      uppercase
                      text-center
                    "
                  >
                    Vins
                  </p>

                  <table class="w-full">
                    <thead class="bg-gray-50">
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
                        "
                      >
                        Couleur
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
                        "
                      >
                        Quantité Totale
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
                        "
                      >
                        PAHT Total
                      </th>
                    </thead>

                    <tbody>
                      <tr v-for="vin in Total[0]" :key="vin.id">
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ vin._id }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ vin.quantite }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ vin.prices }} €
                        </td>
                      </tr>
                      <tr v-for="tot in Total[1]" :key="tot.id">
                        <td
                          class="
                            px-8
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          Total :
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ tot.quantite }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ tot.prices }} €
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="
                    pt-24
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                    sm:rounded-lg
                  "
                >
                  <p
                    class="
                      pb-10
                      text-gray-500 text-xs
                      font-bold
                      uppercase
                      text-center
                    "
                  >
                    Alcools
                  </p>

                  <table class="w-full">
                    <thead class="bg-gray-50">
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
                        "
                      >
                        Quantité Totale
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
                        "
                      >
                        PAHT Total
                      </th>
                    </thead>

                    <tbody>
                      <tr v-for="alcool in TotalAlcool[0]" :key="alcool.id">
                        <td
                          class="
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ alcool._id }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ alcool.quantite }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ alcool.prices }} €
                        </td>
                      </tr>
                      <tr v-for="totAlc in TotalAlcool[1]" :key="totAlc.id">
                        <td
                          class="
                            px-8
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          Total :
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ totAlc.quantite }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ totAlc.prices }} €
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    class="
                      pt-10
                      pb-10
                      text-gray-500 text-xs
                      font-bold
                      uppercase
                      text-center
                    "
                  >
                    Bilan
                  </p>
                  <table class="w-full">
                    <thead class="bg-gray-50">
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
                        "
                      ></th>
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
                        "
                      >
                        Quantité Totale
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
                        "
                      >
                        PAHT Total
                      </th>
                    </thead>

                    <tbody v-for="totAlc in TotalAlcool[1]" :key="totAlc.id">
                      <tr v-for="tot in Total[1]" :key="tot.id">
                        <td
                          class="
                            px-8
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          Total :
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ totAlc.quantite + tot.quantite }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{ totAlc.prices + tot.prices }} €
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Kpi",

  created() {
    this.$store.dispatch("wines/wineKpi");
    this.$store.dispatch("alcools/alcoolKpi");
  },

  computed: {
    Total() {
      return this.$store.state.wines.Total;
    },
    TotalAlcool() {
      return this.$store.state.alcools.TotalAlcool;
    },
  },
};
</script>

<style>
</style>