import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import Home from './pages/Home/Home'
import { BookingPage } from './pages/Booking/BookingPage';
import { AboutPage } from "./pages/About/AboutPage";
import { MenuPage } from './pages/Menu/MenuPage';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="reservation" element={<BookingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="confirmation" element={<ConfirmedBooking />} />
      </Route>
    )
  );
  return (
   <RouterProvider router={router} />
  );
}

export default App
