<template>
  <div>
    <NewOrder />
    <WinesAdmOrder v-if="toggleCrud" />
  </div>
</template>

<script>
import WinesAdmOrder from "../components/AdminWines/WinesAdm.vue";
import NewOrder from "../components/AdminOrders/UpdateOrder.vue";
export default {
  components: { NewOrder, WinesAdmOrder },
  data() {
    return {
      toggleCrud: false,
    };
  },
  methods: {
    toggle() {
      this.toggleCrud = !this.toggleCrud;
    },
  },
};
</script>

<style>
</style>