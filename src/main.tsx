import ReactDOM from "react-dom/client";
import App from "Routes";
import "styles/index.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "Utils/Redux/store/store";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
