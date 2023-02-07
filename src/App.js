import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Movie from "./components/Movie";
import Actor from "./components/Actor";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home />
        </div>
      )
    },
    { path: "/search/:movie", 
    element: <SearchResult />
   },
    {
      path: "/movie/:movieId",
      element: <Movie />
    },
    {
      path: "/actor/:actorId",
      element: <Actor/>
  }
  
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
