import { Navigate } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import Home from "../pages/Home";
import ElectronicMarketingAndSocialMedia from "../pages/services/ElectronicMarketingAndSocialMedia";
import SoftwareDevelopment from "../pages/services/SoftwareDevelopment";
import Banners from "../pages/banner/Banners";

function QaribaRoutes() {
     return [
          {
               'path': '/home',
               'element': <Home />
          },
          {
               'path': '/',
               'element': <Navigate to='/home'/>
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
          }
     ];
}
export default QaribaRoutes;