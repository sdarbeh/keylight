import React, { FC, Suspense } from 'react';
import { StyleSheetManager } from 'styled-components';
import { CircularProgress } from '@mui/material';
import { LoaderProps } from './types';
import LoaderStyled from './loader.styled';

const Loader: FC<LoaderProps> = ({
  background,
  backgroundColor,
  color,
  scale = 1,
  ellipsis,
  spinner,
  children,
}) => {
  let loader;

  if (ellipsis) {
    color = color || 'charlie';
    const contentClass = `ui-bg-color-${color} ui-radius-circle`;

    loader = (
      <div className="app-loader-ellipsis">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className={contentClass} />
        ))}
      </div>
    );
  } else {
    color = color || 'charlie';
    const spinnerProps = typeof spinner !== 'boolean' ? spinner : {};

    loader = (
      <div className="app-loader-spinner">
        <CircularProgress {...spinnerProps} size={`calc(16px * ${scale})`} />
      </div>
    );
  }

  const containerClass = [
    'loader-container ui-display-flex ui-items-center ui-justify-center',
    backgroundColor ? `ui-bg-color-${backgroundColor}` : false,
    background === 'solid' && !backgroundColor ? 'ui-bg-color-alpha' : false,
    background === 'modal' && !backgroundColor ? 'ui-bg-color-modal' : false,
  ]
    .filter(Boolean)
    .join(' ');

  const component = (
    <StyleSheetManager
      shouldForwardProp={(prop) => ['className', 'background', 'children'].includes(prop)}
    >
      <LoaderStyled
        className={containerClass}
        background={background}
        backgroundColor={backgroundColor}
        color={color}
        scale={scale}
      >
        {loader}
      </LoaderStyled>
    </StyleSheetManager>
  );

  return children ? <Suspense fallback={component}>{children}</Suspense> : component;
};

export default Loader;
