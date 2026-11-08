
import React, { useState } from 'react';

import ForgetPassword from './components/ForgetPassword';
import Login from './components/Login';
import NumberVerification from './components/NumberVerification';
import ResetPassword from './components/ResetPassword';
import Registration from './components/Registration';
import SelectCity from './components/SelectCity';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import Services from './components/Services';

export default function App() {
  const [page, setPage] = useState('login');

  // LOGIN
  if (page === 'login') {
    return (
      <Login
        onBack={() => setPage('login')}
        onForgetPassword={() => setPage('forget')}
        onRegister={() => setPage('registration')}
        onContinue={() => setPage('mainpage')}
      />
    );
  }

  // REGISTRATION
  if (page === 'registration') {
    return (
      <Registration
        onBack={() => setPage('login')}
        onContinue={() => setPage('selectcity')}
      />
    );
  }

  // SELECT CITY
  if (page === 'selectcity') {
    return (
      <SelectCity
        onBack={() => setPage('registration')}
        onContinue={() => setPage('mainpage')}
      />
    );
  }

  // MAIN PAGE
  if (page === 'mainpage') {
    return (
      <MainPage
        onBack={() => setPage('login')}
        onContinue={() => setPage('services')}
        onProfile={() => setPage('profile')}
        onServices={() => setPage('services')}
      />
    );
  }

  // PROFILE
  if (page === 'profile') {
    return (
      <ProfilePage
        onBack={() => setPage('mainpage')}
        onLogout={() => setPage('login')}
      />
    );
  }

  // SERVICES
  if (page === 'services') {
    return (
      <Services
        onBack={() => setPage('mainpage')}
      />
    );
  }

  // FORGET PASSWORD
  if (page === 'forget') {
    return (
      <ForgetPassword
        onBack={() => setPage('login')}
        onContinue={() => setPage('verification')}
      />
    );
  }

  // NUMBER VERIFICATION
  if (page === 'verification') {
    return (
      <NumberVerification
        onBack={() => setPage('forget')}
        onContinue={() => setPage('password')}
      />
    );
  }

  // RESET PASSWORD
  if (page === 'password') {
    return (
      <ResetPassword
        onBack={() => setPage('verification')}
        onContinue={() => setPage('login')}
      />
    );
  }

  return null;
}
