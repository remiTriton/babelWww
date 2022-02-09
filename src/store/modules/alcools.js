const alcools = {
    name: "alcools",
    namespaced: true,
    state: {
        alcools: [],
        TotalAlcool: [],
        alcool: {},
        pages: [],
        request: '',
        searchWord: '',
        type: '',
        price: Number,
    },

    mutations: {
        setAlcools(state, list) {
            state.alcools = list;
        },
        setAlcool(state, list) {
            state.alcool = list;
        },
        setTotalAlcool(state, list) {
            state.TotalAlcool = list;
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
        //Get all alcohols

        async fetchAlcools(context, i) {
            const res = await fetch("/api/alcools/all/" + i + "/24")
            const data = await res.json();
            const alcools = data.alcools
            const pages = data.pages
            const catalog = [];
            for (let i = 0; i < parseInt(pages) + 1; i++) {
                catalog.push(i);
            }
            context.commit('setRequest', null);
            context.commit('setPrice', null);
            context.commit('setType', null)
            context.commit("setAlcools", alcools);
            context.commit('setPages', catalog);
            context.commit('setSearchWord', null)
            },

//get One Alcool 
async OneAlcool(context, _id) {
  const res = await fetch("/api/alcools/" + _id)
  const data = await res.json();
  context.commit("setAlcool", data);
},

    //post an alcools request
    async addAlcool(context, body) {
        await fetch("/api/alcools/", {
          "method": "POST",
          headers: {
            "Content-Type": "application/json",
  
            Authorization: 'Bearer ' + localStorage.getItem('token')
  
          },
          body: JSON.stringify(body)
        })
        context.commit('setAlcools')
      },
    //del one alcohols
    async deleteAlcool(context, _id) {
        await fetch("/api/alcools/" + _id, {
          "method": "DELETE",
          "headers": {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        const res = await fetch("/api/alcools/all/0/24")
        const data = await res.json();
        context.commit("setAlcools", data.alcools);
      },
      //recherche par type d'alcools 
      async FilterByType(context, [query, i]) {
        const res = await fetch("/api/alcools/" + query + '/' + i + '/24')
        const data = await res.json();
        const catalog = [];
        for (let i = 0; i < parseInt(data.pagination) + 1; i++) {
          catalog.push(i);
        }
        context.commit('setType', null)
        context.commit('setRequest', query);
        context.commit('setPages', catalog);
        context.commit("setAlcools", data.alcools);
        context.commit('setSearchWord', null)
      },


      async SearchAlcool(context, [type, query, i]) {
        const res = await fetch("/api/alcools/" + type + "/" + query + "/" + i + "/24")
        const data = await res.json();
        const catalog = [];
        for (let i = 0; i < parseInt(data.pagination) + 1; i++) {
          catalog.push(i);
        }
        context.commit('setSearchWord', query);
        context.commit('setType', type)
        context.commit("setAlcools", data.alcools);
        context.commit('setPages', catalog);
        context.commit('setRequest', null);
      },
      async AlcoolByPrice(context, [price, i]) {
        const res = await fetch('/api/alcools/price/' + i + '/24', {
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
        context.commit('setAlcools', data.alcools);
        context.commit('setPages', catalog);
      },

},
}

export default alcools;