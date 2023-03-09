import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import ReactDOM from "react-dom/client";
import App from './App';
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

studio.extend(extension);
studio.initialize();

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <App/>
  </>
)
