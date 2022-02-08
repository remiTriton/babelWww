<template>
  <div>
    <div class="formulaire">
      <form @submit.prevent.stop class="w-full max-w-lg mt-10">
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
              for="grid-vigneron"
            >
              Producteur
            </label>
            <input
              v-model="producteur"
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
              for="grid-millesime"
            >
              Centilitrage
            </label>
            <input
              v-model="centilitrage"
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
              type="number"
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
              Type
            </label>
            <select
              v-model="type"
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
              <option>Anise Mediterranée</option>
              <option>Spiritueux</option>
              <option>Apéritif</option>
              <option>Digestifs Liqueurs</option>
              <option>Soft</option>
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
                text-black
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
                text-gray-500
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
              Download images
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
          @click="newAlcool"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addAlcool",
  data() {
    return {
      cuvee: "",
      producteur: "",
      type: "",
      centilitrage: "",
      description: "",
      quantite: "",
      prix: "",
      imgBase64: "",
      quantite: 0,
      img: "/src/",
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
    async newAlcool() {
      const alcool = {
        cuvee: this.cuvee,
        producteur: this.vigneron,
        centilitrage: this.centilitrage,
        type: this.type,
        description: this.description,
        quantite: this.quantite,
        prix: this.prix,
        imgBase64: this.imgBase64,
      };
      await this.$store.dispatch("alcools/addAlcool", alcool);
      await this.$store.dispatch("alcools/fetchAlcools", 0);
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