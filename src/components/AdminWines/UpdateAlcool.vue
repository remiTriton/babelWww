<template>
  <div>
    <div class="formulaire">
      <form @submit.prevent.stop class="w-full max-w-lg mt-20">
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
              for="grid-cuvee"
            >
              Cuvée
            </label>
            <input
              v-model="alcool.cuvee"
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
              Producteur
            </label>
            <input
              v-model="alcool.producteur"
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
              for="grid-millesime"
            >
              Centilitrage
            </label>
            <input
              v-model="alcool.centilitrage"
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
              >Type
            </label>
            <select
              v-model="alcool.type"
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
              En stock : {{ alcool.quantite }}<br />
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
              v-model="alcool.prix"
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
              id="prix"
              type="number"
              placeholder="0"
            />
          </div>
          <div>
            <label
              class="
                info
                uppercase
                tracking-wide
                text-black text-xs
                font-bold
                mb-2
              "
              for="grid-description"
            >
              Description
            </label>
            <textarea
              v-model="alcool.description"
              class="
                resize
                border
                rounded-md
                border border-gray-200
                appearance-none
                block
                text-black
                bg-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
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
              Télécharger une image
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
            py-2
            px-4
            rounded-full
            mt-10
          "
          type="submit"
          @click="updateWine()"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateAlcool",
  props: ["id"],
  data() {
    return {
      imgBase64: "",
      quantite: 0,
      img: "/src/",
    };
  },
  created() {
    this.$store.dispatch("alcools/OneAlcool", this.$route.params.id);
  },
  computed: {
    alcool() {
      return this.$store.state.alcools.alcool;
    },
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
    async updateWine() {
      if (!this.imgBase64) {
        this.imgBase64 === this.alcool.imgBase64;
      }
      await this.$store.dispatch("alcools/updateAlcool", [
        this.$route.params.id,
        {
          cuvee: this.alcool.cuvee,
          centilitrage:this.alcool.centilitrage,
          producteur: this.alcool.producteur,
          type: this.alcool.type,
          description: this.alcool.description,
          quantite: this.quantite + this.alcool.quantite,
          prix: this.alcool.prix,
          imgBase64: this.imgBase64 || this.alcool.imgBase64,
        },
      ]);
      await this.$router.push("/Admin");
    },
  },
};
</script>

<style>
.formulaire {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.block {
  justify-content: space-evenly;
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
