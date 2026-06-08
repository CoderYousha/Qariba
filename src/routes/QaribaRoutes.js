import { Navigate } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import Home from "../pages/Home";
import ElectronicMarketingAndSocialMedia from "../pages/services/ElectronicMarketingAndSocialMedia";
import SoftwareDevelopment from "../pages/services/SoftwareDevelopment";
import Banners from "../pages/banner/Banners";
import Software from "../pages/categories/Software";
import Marketing from "../pages/categories/Marketing";
import Photography from "../pages/categories/Photography";
import SubCategories from "../pages/sub_categories/SubCategories";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Profile from "../pages/profile/Profile";
import Requests from "../pages/requests/Requests";

function QaribaRoutes() {
     return [
          {
               'path': '/login',
               'element': <Login />
          },
          {
               'path': '/register',
               'element': <Register />
          },
          {
               'path': '/forgot-password',
               'element': <ForgotPassword />
          },
          {
               'path': '/profile',
               'element': <Profile />
          },
          {
               'path': '/home',
               'element': <Home />
          },
          {
               'path': '/',
               'element': <Navigate to='/home' />
          },
          {
               'path': '/software-development',
               'element': <SoftwareDevelopment />
          },
          {
               'path': '/electronic-marketing-social-media',
               'element': <ElectronicMarketingAndSocialMedia />
          },
          {
               'path': '/about-us',
               'element': <Aboutus />
          },
          {
               'path': '/banners',
               'element': <Banners />
          },
          {
               'path': '/software',
               'element': <Software />
          },
          {
               'path': '/marketing',
               'element': <Marketing />
          },
          {
               'path': '/photography',
               'element': <Photography />
          },
          {
               'path': '/sub-categories/:id',
               'element': <SubCategories />
          },
          {
               'path': '/portfolio',
               'element': <Projects />
          },
          {
               'path': '/portfolio/:id',
               'element': <ProjectDetails />
          },
          {
               'path': '/orders',
               'element': <Requests />
          },
     ];
}
export default QaribaRoutes;