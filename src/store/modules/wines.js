const wines = {
  name: "wines",
  namespaced: true,
  state: {
    wines: [],
    Total: [],
    wine: {},
    pages: []
  },

  mutations: {
    setwines(state, list) {
      state.wines = list;
    },
    setwine(state, list) {
      state.wine = list;
    },
    setTotal(state, list) {
      state.Total = list;
    },
    setPages(state, list) {
      state.pages = list;
    },
  },

  actions: {
    //ON RECUPERE LES winesS

    async fetchWines(context) {
      const res = await fetch("/api/wines/")
      const data = await res.json();
      const catalog = [];

      for (let i = 0; i < parseInt(data.length / 24) + 1; i++) {
        catalog.push(i);
      }
      context.commit("setwines", data);
      context.commit("setPages", catalog);

    },

    //Print d'un wines

    async findOnewines(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data);
    },

    async getWineQuantity(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data.quantite);
      console.log(data.quantite)
    },

    //On cherche un wines 

    async searchWinesByName(context, [type, query]) {
      const res = await fetch("/api/wines/" + type + "/" + query)
      const data = await res.json();
      context.commit("setwines", data);
    },

    //filter by color
    async searchWinesByColor(context, query) {
      const res = await fetch("/api/wines/color/" + query)
      const data = await res.json();
      context.commit("setwines", data);
    },

    //delete one wine
    async deleteWine(context, _id) {
      await fetch("/api/wines/" + _id, {
        "method": "DELETE",
        "headers": {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      const res = await fetch("/api/wines/")
      const data = await res.json();
      context.commit("setwines", data);
    },

    async addWine(context, body) {
      await fetch("/api/wines/", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: 'Bearer ' + localStorage.getItem('token')

        },
        body: JSON.stringify(body)
      })
      context.commit('setwines')
    },
    async updateWine(context, [id, wine]) {
      await fetch("/api/wines/" + id, {
        "method": "PUT",
        body: JSON.stringify(wine),
        "headers": {
          "Content-type": "application/json",

          Authorization: 'Bearer ' + localStorage.getItem('token')

        }
      });
    },
    async getWineByPrice(context, price) {
      const res = await fetch('/api/wines/price/lowerthan', {
        "method": "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(price),

      })
      const data = await res.json();

      context.commit('setwines', data)

    },

    async wineKpi(context) {
      const res = await fetch("/api/wines/kpi/sum"
      );
      const data = await res.json();
      context.commit("setTotal", data)
    },

    async limitWines(context, i) {
      const res = await fetch("/api/wines/pagination/" + i + "/24")
      const data = await res.json();
      context.commit("setwines", data);
    }
  }
}
export default wines;
