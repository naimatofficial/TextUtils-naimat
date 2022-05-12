// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
	// initial state is going to be a light mode
	const [mode, setMode] = useState("light");
	// initial state is going to be a null (No message display!)
	const [alert, setAlert] = useState(null);
	// create a function to set the props as a prameters (message and type)
	const showAlert = (message, type) => {
		// set the alert props in an object
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	const toogleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#111827";
			document.body.style.color = "#f7f7f7";
			showAlert("Dark Mode is Enable", "success"); // calling the function
		} else {
			setMode("light");
			document.body.style.backgroundColor = "#f7f7f7";
			document.body.style.color = "#444";
			showAlert("Light Mode is Enable", "success");
		}
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtils" toogleMode={toogleMode} mode={mode} />
				<Alert alert={alert} />
				{/* pass the alert object  */}

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

				<div className="container my-3">
					<Routes>
						<Route
							path="/"
							caseSensitive={false}
							element={<TextFrom mode={mode} showAlert={showAlert} />}
						/>
						<Route path="/about" caseSensitive={false} element={<About />} />
					</Routes>
				</div>
			</Router>
		</>
		// <Navbar />
		// aboutText is default value is About so it can not be pass any value...
		// if you change the about text then you pass the value
		// <Navbar title="CodeWithNaimat" />
	);
}

export default App;

/* <img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React With Naimat
				</a> */
