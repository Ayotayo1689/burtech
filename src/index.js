import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { createStandaloneToast } from "@chakra-ui/toast";

const algoliaID = process.env.REACT_APP_ALGOLIA_ID || "7D4AYGXH2S";
const algoliaKey =
	process.env.REACT_APP_ALGOLIA_KEY || "16ceb33e54fe2c29391a7a7afc070d59";

const searchClient = algoliasearch(algoliaID, algoliaKey);

// Bringing in the GoogleOAuthProvider from the package
const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<InstantSearch
			searchClient={searchClient}
			indexName="website_burtech_index"
		>
			<Provider store={store}>
				<ChakraProvider>
					<App tab="home" />
					<ToastContainer />
				</ChakraProvider>
			</Provider>
		</InstantSearch>
	</React.StrictMode>
);
