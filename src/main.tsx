import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <QueryProvider>
        <AuthContext>
          <App/>
        </AuthContext> 
      </QueryProvider>
    </BrowserRouter>
);