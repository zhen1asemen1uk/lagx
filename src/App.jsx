import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/rootRouters";
import { GlobalStyle } from "./styles/styles";

function App() {
    return (
        <>
            <RouterProvider router={routers} />
            <GlobalStyle />
        </>
    );
}

export default App;
