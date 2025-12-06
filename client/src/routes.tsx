import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./features/store/Store";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path: '', element: <Store />}
        ]
    }
]);