import React, { FC } from 'react';
import { ROUTE_NAME_MAP } from 'constants/routes';
import { HomePage, NotFoundPage } from 'pages';
import { Route, Routes, useLocation } from 'react-router-dom';

const App: FC = () => {
  const location = useLocation();
  const backgroundPath = location.state?.background;
  const isBackgroundPath = !!backgroundPath;

  return (
    <Routes location={isBackgroundPath ? backgroundPath : location}>
      <Route path={ROUTE_NAME_MAP.HOME_INDEX} index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
