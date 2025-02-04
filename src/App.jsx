import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import Home from './pages/Home/Home'
import { BookingPage } from './pages/Booking/BookingPage';
import { AboutPage } from "./pages/About/AboutPage";
import { CategoryPage } from "./pages/Category/CategoryPage";
import { PageNotFound } from './pages/PageNotFound';
import { RecipesPage } from './pages/Recipes/RecipesPage';
import { RecipesDetails } from './pages/RecipesDetails/RecipesDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="reservation" element={<BookingPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="recipes-category" element={<CategoryPage />} />
        <Route path="recipes-category/:category" element={<RecipesPage />} />
        <Route path="recipes-category/:category/:recipeId" element={<RecipesDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
   <RouterProvider router={router} />
  );
}

export default App
