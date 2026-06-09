import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './styles/colors.css';
import './styles/constants.css';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { useTheme } from '@mui/material/styles';
import QaribaRoutes from './routes/QaribaRoutes';
import { Box, Typography } from '@mui/material';
import ProgrammingImage from './images/services/programming.png';
import PromotionImage from './images/services/promotion.jpg';
import CameraImage from './images/services/camera.jpg';
import Header from './components/Header';
import { NavLink } from 'react-router-dom';

function App() {
  const openServices = () => {
    document.getElementById('services').style.display = 'block';
  }

  const closeServices = () => {
    document.getElementById('services').style.display = 'none';
  }

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <main>
      <div className="App">
        {/* <BrowserRouter> */}
        <Routes>
          {
            QaribaRoutes().map((route, index) =>
              <Route key={index} path={route.path} element={<AuthProvider><Header onMouseEnter={openServices} onMouseLeave={closeServices} />{route.element}</AuthProvider>} />
            )
          }
        </Routes>
        {/* </BrowserRouter> */}
        {/* Services Popup View */}
        <Box onMouseEnter={openServices} id='services' className='w-[500px] h-fit hidden bg-white absolute top-12 right-1/4 -translate-x-1/2 rounded-lg p-3'>
          <Box onClick={() => {navigate('/software'); closeServices();}} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
            <img src={ProgrammingImage} className="w-20 h-2w-20 rounded-lg ml-3" />
            <Typography fontWeight={800} variant="h5">تطوير البرمجيات</Typography>
          </Box>
          <Box onClick={() => {navigate('/marketing'); closeServices();}} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
            <img src={PromotionImage} className="w-20 h-2w-20 rounded-lg ml-3" />
            <Typography fontWeight={800} variant="h5">التسويق الرقمي</Typography>
          </Box>
          <Box onClick={() => {navigate('/photography'); closeServices();}} className='flex items-center cursor-pointer hover:bg-gray-100 duration-100 p-2 rounded-lg' dir="rtl">
            <img src={CameraImage} className="w-20 h-2w-20 rounded-lg ml-3" />
            <Typography fontWeight={800} variant="h5">التصوير</Typography>
          </Box>
        </Box>
      </div>
    </main>
  );
}

export default App;
