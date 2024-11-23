import { Header, Heading, Loader } from 'components';
//import { Home } from 'pages/Home';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('pages/Home'));

// У застосунку повинні бути такі маршрути.

//     '/' - сторінка <Home>, домашня сторінка зі переліком Європейських країн.
//     '/country' - сторінка <SearchCountry>, сторінка пошуку країн по регіону.
//     '/country/:countryId' - сторінка <Country>, сторінка з детальною інформацією про країну

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
