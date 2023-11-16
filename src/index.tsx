import React, { Suspense } from "react";
import { App } from "./components/App";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "./pages/about/About.lazy";
import { LazyShop } from "./pages/shop/Shop.lazy";


const root = document.getElementById("root");

if (!root) {
    throw new Error("root is not defined");
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: (
                    <Suspense>
                        <LazyAbout />
                    </Suspense>
                ),
            },
            {
                path: "/shop",
                element: (
                    <Suspense>
                        <LazyShop />
                    </Suspense>
                ),
            },
        ],
    },
]);

container.render(<RouterProvider router={router} />);
export { LazyAbout };

