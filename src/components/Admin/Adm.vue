<template>
  <Suspense>
    <div v-if="auth.user.role === 'Admin' || auth.user.role === 'Manager'">
      <!-- Static sidebar for desktop -->
      <!-- <p class='text-black'> {{auth}}</p> -->
      <div class="hidden md:flex md:w-64 md:flex-col md:absolute">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <!-- <p class='text-black'>{{auth}}</p> -->
        <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
          <div>
            <button
              @click="nouveauBon(auth.user.email)"
              type="button"
              class="
                B
                outline-flex
                items-center
                px-6
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-full
                shadow-sm
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
                mt-10
                mb-10
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
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </button>
          </div>
          <div
            @click.prevent="toggleWines"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
              mt-5
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Vins
          </div>
          <div
            @click.prevent="toggleAlcools"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
              mt-5
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Alcools
          </div>
          <div
            @click.prevent="newWine()"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ajouter
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
            @click.prevent="toggleBills()"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Historique Bon de Commande
          </div>
          <div
            @click.prevent="toggleshowKpi()"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Dashboard
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Calendrier
          </div>

          <div
            @click.prevent="toggleUsers"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Utilisateurs
          </div>
        </nav>
      </div>

      <div v-if="add"><Add /></div>
      <OrderDoing v-if="order" />
      <div v-if="showWines"><WinesAdm /></div>
      <div v-if="showUsers"><Users /></div>
      <div v-if="showBills"><Orders /></div>
      <div v-if="showKpi"><Kpi /></div>
      <div v-if="showAlcool"><AlcAdm /></div>
    </div>
    <div v-else class="text-gray-700">
      <router-link to="/WineList"
        >Accès interdit. Veuillez retourner à la page des vins.</router-link
      >
    </div>
  </Suspense>
</template>

<script>
import OrderDoing from "../AdminOrders/OrderDoing.vue";
import Add from "../AdminWines/Add.vue";
import WinesAdm from "../AdminWines/WinesAdm.vue";
import Users from "../AdminUsers/Users.vue";
import Orders from "../AdminOrders/Orders.vue";
import Kpi from "./Kpi.vue";
import AlcAdm from "../AdminWines/AlcoolAdm.vue";

export default {
  name: "Adm",
  components: {
    OrderDoing,
    Add,
    WinesAdm,
    Users,
    Orders,
    Kpi,
    AlcAdm,
  },
  data() {
    return {
      add: false,
      showWines: true,
      showUsers: false,
      showBills: false,
      quantite: "",
      showKpi: false,
      showAlcool: false,
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth.user;
    },
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    newWine() {
      this.add = !this.add;
    },
    toggleUsers() {
      this.add = false;
      this.showWines = false;
      this.showUsers = true;
      this.showBills = false;
      this.showKpi = false;
      this.showAlcool = false;
    },
    toggleWines() {
      this.add = false;
      this.showWines = true;
      this.showUsers = false;
      this.showBills = false;
      this.showKpi = false;
      this.showAlcool = false;
    },
    toggleBills() {
      this.add = false;
      this.showWines = false;
      this.showUsers = false;
      this.showAlcool = false;
      this.showBills = true;
      this.showKpi = false;
    },
    toggleshowKpi() {
      this.add = false;
      this.showWines = false;
      this.showUsers = false;
      this.showBills = false;
      this.showAlcool = false;
      this.showKpi = true;
    },
    toggleAlcools() {
      this.add = false;
      this.showWines = false;
      this.showUsers = false;
      this.showBills = false;
      this.showKpi = false;
      this.showAlcool = true;
    },
    async nouveauBon(user) {
      await this.$store.dispatch("orders/newOrder", {
        email: user,
      });
    },
  },
};
</script>

<style scoped>
.B {
  background-color: #2a574c;
}

.round {
  background-color: #2a574c;
  color: white;
}
</style>