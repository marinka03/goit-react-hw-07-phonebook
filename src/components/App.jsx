import ContactsPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
