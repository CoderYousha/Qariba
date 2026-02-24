import Home from "../pages/Home";
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
          }
     ];
}
export default QaribaRoutes;