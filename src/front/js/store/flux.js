const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
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
			playerFav:[],
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded, synching the session storage token")
				if(token && token != "" && token != undefined) setStore({ token: token});
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("You have logged out")
				setStore({ token: null, message: null});
			},
			
			game: () => {
				
			},

			profile: () => {

			},

			signup: async(email,password, securityQuestions) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
						securityQuestions: securityQuestions
						
					})
				};
				try{
					const resp = await fetch(process.env.BACKEND_URL+"/api/signup", opts)
					if(resp.status !== 200){
						alert("There has been an sign up error. response code ",response.status);
						return false;
					} 
				
						
					const data = await resp.json();
						sessionStorage.setItem("token", data.access_token);
						setStore({ token: data.access_token})
						return true;
					}
				catch(error){
					console.error("There has been an error signing up")
				}
			},

			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
 
			try{
				const resp = await fetch(process.env.BACKEND_URL+"/api/token", opts)
				if(resp.status !== 200){
					alert("There has been a log in error. response code: ", response.status);
					return false;
				} 
			
					
				const data = await resp.json();
					console.log("access token: ",data)  
					// never do this console log irl
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token})
					return true;
				}
			catch(error){
				console.error("There has been an error login in")
			}
		},
				
			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				};
				fetch(process.env.BACKEND_URL+"/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			
forgotPassword: async (email, securityQuestions) => { 
	const opts = {
	  method: 'POST',
	  headers: {
		"Content-Type": "application/json"
	  },
	  body: JSON.stringify({
		email: email,
		securityQuestions: securityQuestions
	  })
	};
	
	try {
	  const resp = await fetch(process.env.BACKEND_URL + "/api/forgot-password", opts);
	  if (resp.status !== 200) {
		alert("There has been a password reset error. Response code: " + resp.status);
		return false;
	  }
	  const data = await resp.json();
	  // Handle the password reset response data as needed
	  return true;
	} catch (error) {
	  console.error("There has been an error resetting the password", error);
	  return false;
	}
  },
  addPlayerProfile:(event)=>{
	const store = getStore()
	const playerFav = getStore().playerFav
	const options = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + store.token
		},
		body: JSON.stringify({
			// eventId: event.id,
			// favoriteType: "event",
			// event_name: event.name,
		})
	}
	// fetch(`${process.env.BACKEND_URL}api/favorite-events`, options)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		favorites.push(event)
	// 		setStore({ currentUser: data.favorites })
	// 		console.log("hello from addFavorite() ", data)
	// 	})
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
			}
		}
	};
};

export default getState;
