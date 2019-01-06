import Components from "views/Components/Components.jsx";
// import LandingPage from "views/LandingPage/LandingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";

// news
import HomePage from "views/HomePage/HomePage.jsx";
import DestinationPage from "views/DestinationPage/DestinationPage.jsx";
import TourPage from "views/TourPage/TourPage.jsx";
import CarRentalPage from "views/CarRentalPage/CarRentalPage.jsx";
import AccessPage from "views/AccessPage/AccessPage.jsx";
import AdminPage from "views/AdminPage/AdminPage.jsx";
import AboutUsPage from "../views/AboutUsPage/AboutUsPage";

const indexRoutes = [
  // news
  {
    path: "/destinations/:destination",
    exact: true,
    name: "DestinationPage",
    component: DestinationPage
  },
  {
    path: "/tours/:tour",
    exact: true,
    name: "TourPage",
    component: TourPage
  },
  {
    path: "/rent-a-car",
    exact: true,
    name: "CarRentalPage",
    component: CarRentalPage
  },
  { path: "/login", exact: true, name: "LoginPage", component: AccessPage },
  { path: "/admin", exact: true, name: "AdminPage", component: AdminPage },
  {
    path: "/about-us",
    exact: true,
    name: "AboutUs",
    component: AboutUsPage
  },

  // {
  //   path: "/landing-page",
  //   exact: true,
  //   name: "LandingPage",
  //   component: LandingPage
  // },
  // {
  //   path: "/profile-page",
  //   exact: true,
  //   name: "ProfilePage",
  //   component: ProfilePage
  // },
  // { path: "/login-page", exact: true, name: "LoginPage", component: LoginPage },
  {
    path: "/components",
    exact: true,
    name: "Components",
    component: Components
  },
  { path: "/", exact: true, name: "Home", component: HomePage }
];

export default indexRoutes;
