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
			personajes: [],
			planetas: [],
			vehiculos: [],
			favorites: [],
			deleteFavorite: [],
			personaje: {},
			planeta: {},
			vehiculo: {},

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

			getPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json();
				const results = data.results;

				// Obtener detalles de cada personaje
				const detailedResults = await Promise.all(
					results.map(async (person) => {
						const personResponse = await fetch(person.url);
						const personData = await personResponse.json();
						return personData.result;
					})
				);

				setStore({ personajes: detailedResults });
			},
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const data = await response.json();
				const results = data.results;

				// Obtener detalles de cada planeta
				const detailedResults = await Promise.all(
					results.map(async (planet) => {
						const planetResponse = await fetch(planet.url);
						const planetData = await planetResponse.json();
						return planetData.result;
					})
				);

				setStore({ planetas: detailedResults });
			},
			
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				const data = await response.json();
				const results = data.results;
			
				// Obtener detalles de cada vehículo
				const detailedResults = await Promise.all(
					results.map(async (vehicle) => {
						const vehicleResponse = await fetch(vehicle.url);
						const vehicleData = await vehicleResponse.json();
						return vehicleData.result;
					})
				);
			
				setStore({ vehiculos: detailedResults });
			},
			addToFavorites: (uid, name) => {

				console.log(name)
				const store = getStore()
				const favorite = { uid: uid, name: name }
				setStore({ favorites: [...store.favorites, favorite] })

			},
			deleteFavorite: (name) => {
				console.log(name)
				const store = getStore();
				const newFavorites = store.favorites.filter(favorite => favorite.name !== name);
				setStore({ favorites: newFavorites });
			},

			obtienePersonaje: (id) => {
				console.log(id)
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((response) => response.json())
					.then(data => setStore({ personaje: data.result }))
			},

			obtienePlaneta: (id) => {

				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((response) => response.json())
					.then(data => setStore({ planeta: data.result }))
			},

			obtieneVehiculo: (id) => {

				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then((response) => response.json())
					.then(data => setStore({ vehiculo: data.result }))
			},

		}
	};
};

export default getState;
