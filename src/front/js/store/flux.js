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
			game: () => {},
			profile: () => {},
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
			addPlayerProfile: async (username, kd_ratio, level, wins) => {
				const store = getStore();
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						username: username,
						kd_ratio: kd_ratio,
						level: level,
						wins: wins
					})
				};
				try {
					const response = await fetch(process.env.BACKEND_URL + "/player-profiles", options);
					if (response.status === 201) {
						console.log("Player profile created successfully");
					} else {
						console.error("Error creating player profile. Response code: ", response.status);
					}
				} catch (error) {
					console.error("An error occurred while creating player profile", error);
				}
			},
		}
	};
};

export default getState;
