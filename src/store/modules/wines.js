const wines = {
  name: "wines",
  namespaced: true,
  state: {
    wines: [],
    Total: [],
    wine: {},
    pages: [],
    request: '',
    searchWord: '',
    type: '',
    price:Number,
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
    setRequest(state, list) {
      state.request = list;
    },
    setSearchWord(state, list) {
      state.searchWord = list
    },
    setType(state, list) {
      state.type = list
    },
    setPrice(state, list) {
      state.price = list
    },
  },

  actions: {
    //ON RECUPERE LES winesS

    async fetchWines(context, i) {
      const res = await fetch("/api/wines/all/" + i + "/24")
      const data = await res.json();
      const wines = data.wines
      const pages = data.pages
      const catalog = [];
      for (let i = 0; i < parseInt(pages) + 1; i++) {
        catalog.push(i);
      }
      context.commit('setRequest', null);
      context.commit("setwines", wines);
      context.commit('setPages', catalog);
      context.commit('setSearchWord', null)

    },
    async findOnewines(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data);
    },

    //On recupere quantite de bouteilles
    async getWineQuantity(context, _id) {
      const res = await fetch("/api/wines/" + _id)
      const data = await res.json();
      context.commit("setwine", data.quantite);
    },

    //On cherche un wines 

    async searchWinesByName(context, [type, query, i]) {
      const res = await fetch("/api/wines/" + type + "/" + query + "/" + i + "/24")
      const data = await res.json();
      const catalog = [];
      for (let i = 0; i < parseInt(data.pagination) + 1; i++) {
        catalog.push(i);
      }
      context.commit('setSearchWord', query);
      context.commit('setType', type)
      context.commit("setwines", data.wine);
      context.commit('setPages', catalog);
      context.commit('setRequest', null);
    },

    //filter by color
    async searchWinesByColor(context, [query, i]) {
      const res = await fetch("/api/wines/color/" + query + '/' + i + '/24')
      const data = await res.json();
      const catalog = [];
      for (let i = 0; i < parseInt(data.pagination) + 1; i++) {
        catalog.push(i);
      }
      context.commit('setType', null)
      context.commit('setRequest', query);
      context.commit('setPages', catalog);
      context.commit("setwines", data.wine);
      context.commit('setSearchWord', null)

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
    async getWineByPrice(context, [price, i]) {
      const res = await fetch('/api/wines/price/lowerthan/' + i + '/24', {
        "method": "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(price),
      })
      const data = await res.json();
      const catalog = [];
      for (let i = 0; i < parseInt(data.pagination) + 1; i++) {
        catalog.push(i);
      }
      context.commit('setType', "prix");
      context.commit('setRequest', null);
      context.commit('setPrice', price);
      context.commit('setwines', data.wines);
      context.commit('setPages', catalog);
    },

    async wineKpi(context) {
      const res = await fetch("/api/wines/kpi/sum"
      );
      const data = await res.json();
      context.commit("setTotal", data)
    },
  }
}
export default wines;
