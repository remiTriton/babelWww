<template>
  <div>
    <div class="selection ml-24">
      <button class="selector" @click.prevent="toggleWines()">
        Vins
      </button>
      <button class="selector" @click.prevent="toggleAlcools()">
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
.selector{
  background-color: #2a574c;
  margin:5px;
  width:150px;
  height:25px;
  border-radius:15px;
  box-shadow: 10px 5px 5px gray;
}
</style>