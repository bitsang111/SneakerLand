import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../../pages/authPages/RegistrationPage';
import AuthorizationPage from '../../../pages/authPages/AuthorizationPage';
import SneakersPage from '../../../pages/sneakerPages/SneakersPage';
import SneakerPage from '../../../pages/sneakerPages/SneakerPage';

type AppRoutesProps = {};
const AppRoutes = ({}: AppRoutesProps): JSX.Element => {
  return (
    <Routes>
      <Route path="/signIn" element={<AuthorizationPage />} />
      <Route path="/signUp" element={<RegistrationPage />} />
      <Route path='/sneakers' element={<SneakersPage/>}/>
      <Route path='/sneakers/:sneakerId' element={<SneakerPage/>}/>
    </Routes>
  );
};
export default AppRoutes;
