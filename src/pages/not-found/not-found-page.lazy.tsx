import React, { lazy, Suspense } from 'react';

const LazyNotFoundPage = lazy(() => import('./not-found-page'));

const NotFoundPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyNotFoundPage {...props} />
  </Suspense>
);

export default NotFoundPage;
