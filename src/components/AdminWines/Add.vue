<template>
  <div>
    <div class="formulaire">
      <button
        @click.prevent="toggleVin"
        class="choix h-7 w-16 ml-5 bg-green-700"
      >
        Vin
      </button>
      <button
        @click.prevent="toggleAlcool"
        class="choix h-7 w-16 ml-5 bg-green-700"
      >
        Alcool
      </button>
      <form v-if="addVin" @submit.prevent.stop class="w-full max-w-lg mt-10">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-domcuveeain"
            >
              Cuvée
            </label>
            <input
              v-model="cuvee"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-cuvee"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-domaine"
            >
              Domaine
            </label>
            <input
              v-model="domaine"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-domaine"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-vigneron"
            >
              Vigneron
            </label>
            <input
              v-model="vigneron"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-vigneron"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-cepage"
            >
              Cépage
            </label>
            <input
              v-model="cepage"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-cepage"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-pays"
            >
              Pays
            </label>
            <select
              v-model="pays"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-pays"
            >
              <option>France</option>
              <option>Italie</option>
              <option>Espagne</option>
              <option>Grêce</option>
              <option>Croatie</option>
            </select>
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-region"
            >
              Région
            </label>
            <input
              v-model="region"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-region"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-departement"
            >
              Département
            </label>
            <input
              v-model="departement"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-departement"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-millesime"
            >
              Millésime
            </label>
            <input
              v-model="millesime"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-millesime"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-couleur"
            >
              Couleur
            </label>
            <select
              v-model="couleur"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-couleur"
            >
              <option>Rouge</option>
              <option>Blanc</option>
              <option>Rosé</option>
              <option>Bubble</option>
              <option>Biere</option>
            </select>
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-quantite"
            >
              Quantité
            </label>
            <input
              v-model="quantite"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-quantite"
              type="number"
              placeholder="0"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-prix"
            >
              Prix
            </label>
            <input
              v-model="prix"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-prix"
              type="number"
              placeholder="0"
            />
          </div>

          <div>
            <label
              class="
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-description"
            >
              Description
            </label>
            <textarea
              v-model="description"
              class="
                resize
                border
                rounded-md
                border border-gray-200
                appearance-none
                block
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
                text-gray-700
              "
              id="grid-description"
              type="text"
            >
            </textarea>
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-download"
            >
              Télécharger image
            </label>
            <input type="file" @change="previewFile" />
            <canvas ref="canvas" />
          </div>
        </div>
        <button
          class="
            But
            bg-blue
            hover:bg-dark
            text-white
            font-bold
            ml-52
            mt-20
            py-2
            px-4
            rounded-full
            mt-10
          "
          type="submit"
          @click="createWine"
        >
          Ajouter
        </button>
      </form>
      <addAlcool v-if="addAlcool" />
    </div>
  </div>
</template>

<script>
import addAlcool from "./AddAlcool.vue";

export default {
  name: "addLiquid",
  components: { addAlcool },
  data() {
    return {
      cuvee: "",
      domaine: "",
      cepage: "",
      millesime: "",
      vigneron: "",
      couleur: "",
      description: "",
      region: "",
      departement: "",
      pays: "",
      quantite: "",
      prix: "",
      imgBase64: "",
      quantite: 0,
      img: "/src/",
      addVin: true,
      addAlcool: false,
    };
  },
  methods: {
    previewFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const maxW = 300;
      const maxH = 300;
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const iw = img.width;
          const ih = img.height;
          const scale = Math.min(maxW / iw, maxH / ih);
          const iwScaled = iw * scale;
          const ihScaled = ih * scale;
          this.$refs.canvas.width = iwScaled;
          this.$refs.canvas.height = ihScaled;
          const ctx = this.$refs.canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
          this.imgBase64 = this.$refs.canvas.toDataURL();
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    },
    toggleVin() {
      this.addVin = true;
      this.addAlcool = false;
    },
    toggleAlcool() {
      this.addVin = false;
      this.addAlcool = true;
    },
    async createWine() {
      const wine = {
        cuvee: this.cuvee,
        domaine: this.domaine,
        cepage: this.cepage,
        millesime: this.millesime,
        vigneron: this.vigneron,
        couleur: this.couleur,
        description: this.description,
        region: this.region,
        departement: this.departement,
        pays: this.pays,
        quantite: this.quantite,
        prix: this.prix,
        imgBase64: this.imgBase64,
      };
      await this.$store.dispatch("wines/addWine", wine);
      await this.$store.dispatch("wines/fetchWines");
    },
  },
};
</script>

<style>
.formulaire {
  display: flex;
  flex: row;
  justify-content: center;
  margin-top: 20px;
}

.choix {
  background-color: #2a574c;
  border-radius: 10px;
  text-align: center;
  box-shadow: 12px 2px 1px rgba(0, 0, 255, 0.2);
}

.sub {
  margin-top: 20px;
}
.col {
  align-items: center;
  margin-top: 25px;
}
.But {
  background-color: #2a574c;
}
</style>