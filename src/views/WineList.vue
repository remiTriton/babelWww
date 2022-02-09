<template>
  <div>
    <div class="selection">
      <button class="selector text-gray-700" @click.prevent="toggleWines()">
        Vins
      </button>
      <button class="text-gray-700 selector" @click.prevent="toggleAlcools()">
        Alcools
      </button>
    </div>
    <List v-if='showWines' />
    <AlcoolList v-if='showAlcools' />
  </div>
</template>

<script>
import List from "../components/Catalog/List.vue";
import AlcoolList from "../components/Catalog/AlcoolList.vue";

export default {
  name: "WineList.vue",
  data(){
    return{
      showWines:true,
      showAlcools:false,
    }
  },
  components: {
     List, 
     AlcoolList },
  methods: {
    toggleWines() {
      this.showWines = true;
      this.showAlcools = false;
    },
    toggleAlcools() {
      this.showAlcools = true;
      this.showWines = false;
    },
  },
};
</script>

<style scoped>
</style>