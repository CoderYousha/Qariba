import Aboutus from "../pages/Aboutus";
import Home from "../pages/Home";
import ElectronicMarketingAndSocialMedia from "../pages/services/ElectronicMarketingAndSocialMedia";
import SoftwareDevelopment from "../pages/services/SoftwareDevelopment";

function QaribaRoutes() {
     return [
          {
               'path': '/home',
               'element': <Home />
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
     ];
}
export default QaribaRoutes;