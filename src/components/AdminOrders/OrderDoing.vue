<template>
  <div
    class="ml-80 mr-16 mt-10 border-dashed border-2 border-gray-600"
    v-if="order._id"
  >
    <p class="ml-16 text-gray-500 text-sm mt-10">Bon de commande en cours :</p>
    <div class="px-2 py-1">
      <table
        class="
          mx-auto
          table-auto
          mt-10
          text-center
          border-2 border-light-blue-500 border-opacity-25
        "
      >
        <thead>
          <tr>
            <th
              scope="col"
              class="
                px-6
                py-3
                text-center text-xs
                font-medium
                text-gray-500 text-center
                uppercase
                tracking-wider
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
                text-gray-500 text-center
                uppercase
                tracking-wider
              "
            >
              Domaine
            </th>
            <th
              scope="col"
              class="
                px-6
                py-3
                text-center text-xs
                font-medium
                text-gray-500 text-center
                uppercase
                tracking-wider
              "
            >
              Couleur / Type
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
              Quantité
            </th>
          </tr>
        </thead>

        <tbody>
          <tr  v-for="win in order.wines" :key="win.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ win.cuvee }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ win.domaine }}</p>
          </td>
          <td
            class="
              px-6
              py-4
              whitespace-nowrap
              text-center text-sm text-gray-500
            "
          >
            <p class="text-gray-500 text-sm">{{ win.couleur }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ win.quantite }}</p>
          </td></tr>
                    <tr class='bg-gray-100' v-for="alcool in order.alcools" :key="alcool.id">
   <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ alcool.cuvee }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ alcool.centilitrage }} cl</p>
          </td>
          <td
            class="
              px-6
              py-4
              whitespace-nowrap
              text-center text-sm text-gray-500
            "
          >
            <p class="text-gray-500 text-sm">{{ alcool.type }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <p class="text-gray-500 text-sm">{{ alcool.quantite }}</p>
          </td>

</tr>
        </tbody>
      </table>
    </div>
    <div class="text-gray-500 text-sm ml-5 mt-10">
      Commandé par : {{ order.userEmail }}
    </div>
    <router-link
      v-if="order._id && order.status != 'Confirmed'"
      :to="{
        name: 'updateOrder',
        params: { id: order._id },
      }"
      ><button
        class="
          on
          ml-32
          mt-10
          mb-10
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full
        "
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
            d="M5 13l4 4L19 7"
          />
        </svg></button
    ></router-link>
    <button @click="cancel" v-if="order" class="on
          ml-10
          mt-10
          mb-10
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
    </button>
    >
  </div>
</template>

<script>
export default {
  name: "OrderDoing",
  computed: {
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    async cancel() {
      await this.$store.dispatch("orders/cancelOrder");
    },
  },
};
</script>

<style>
.on {
  background-color: #2a574c;
}
</style>