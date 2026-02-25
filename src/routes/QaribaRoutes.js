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
          }
     ];
}
export default QaribaRoutes;