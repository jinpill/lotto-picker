import ReactDOM from "react-dom/client";
import App from "./App";

const $root = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot($root);
root.render(<App />);

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );