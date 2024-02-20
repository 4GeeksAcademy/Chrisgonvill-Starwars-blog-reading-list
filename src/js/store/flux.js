const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			planetas:[],
			vehiculos:[],
			favorites:[],
			deleteFavorite:[]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				
			},

			getPeople: async() => {
				const response= await fetch ("https://www.swapi.tech/api/people")
				const data= await response.json()
				.then(data => setStore({personajes: data.results}))
			},
			getPlanets: async() => {
				const response= await fetch ("https://www.swapi.tech/api/planets")
				const data= await response.json()
				.then(data => setStore({planetas: data.results}))
			},
			getVehicles: async() => {
				const response= await fetch ("https://www.swapi.tech/api/species")
				const data= await response.json()
				.then(data => setStore({vehiculos: data.results}))
			},
			addToFavorites: (uid,name) => {
				
				console.log(name)
				const store = getStore()
				const favorite = {uid: uid,name:name}
				setStore({favorites: [...store.favorites, favorite]})

			},
			deleteFavorite: (name) => {
				console.log(name)
				const store = getStore();
				const newFavorites = store.favorites.filter(favorite => favorite.name !== name);
				setStore({ favorites: newFavorites });
			},
		}
	};
};

export default getState;
