import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAME_MAP } from 'constants/routes';
import NotFoundPageWrapper from './not-found-page.styled';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => (
  <NotFoundPageWrapper
    className="ui-display-flex ui-items-center ui-justify-center"
    data-test-not-found-page-wrapper
  >
    <div className="home-page-index-content ph5 ui-display-flex ui-flex-column ui-items-center">
      <h1
        className="ui-font-xjumbo mt0 mr0 mb1 ml0 ui-font-weight-bold"
        data-test-not-found-page-header
      >
        404.
      </h1>
      <h3
        className="ui-font-jumbo m0 ui-font-weight-bold ui-text-center"
        data-test-not-found-page-description
      >
        Oops! Looks like you&#39;ve wandered into uncharted territory. The page you&#39;re looking
        for isn&#39;t here.
      </h3>
      <Link
        to={ROUTE_NAME_MAP.HOME_INDEX}
        className="mt7 ui-self-center ui-color-theme"
        rel="noopener noreferrer"
        aria-label="Navigate back to the home page"
        data-test-not-found-page-archive-nav-link
      >
        <span>Go to Home</span>
      </Link>
    </div>
  </NotFoundPageWrapper>
);

export default NotFoundPage;
