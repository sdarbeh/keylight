import React, { FC } from 'react';
import { KeyboardBackspace } from '@mui/icons-material';
import { Button, ButtonProps, LinearProgress, LinearProgressProps } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppColor } from 'constants/application-theme';
import Loader from 'widgets/loader/loader';
import SubHeaderWrapper from './sub-header.styled';

export interface SubHeaderProps {
  title?: string;
  backToPath?: string;
  leftComponent?: React.ReactNode;
  linearProps?: LinearProgressProps;
  rightButtonProps?: ButtonProps;
  backgroundColor?: AppColor;
  isLoading?: boolean;
}

const SubHeader: FC<SubHeaderProps> = (props) => {
  const {
    title,
    backToPath,
    leftComponent,
    linearProps,
    rightButtonProps,
    backgroundColor = 'transparent',
    isLoading,
  } = props;

  return (
    <SubHeaderWrapper>
      <header
        className={`ph5 sub-header-container ui-display-flex ui-items-center ui-justify-between ui-bg-color-${backgroundColor}`}
      >
        <div className="ui-display-flex">
          {backToPath && !leftComponent && (
            <div className="mr5 sub-header-left-container">
              <Link
                to={backToPath}
                rel="noopener noreferrer"
                aria-label="Navigate back"
                data-test-main-screen-nav-link="home"
                className="ui-display-center"
              >
                <KeyboardBackspace />
              </Link>
            </div>
          )}
          {leftComponent && (
            <div className="mr5 sub-header-left-container custom-sub-header-left-container">
              {leftComponent}
            </div>
          )}
          {title && (
            <h1 id="content-title" className="ui-font-large ui-display-center">
              {title}
            </h1>
          )}
        </div>
        {rightButtonProps && !isLoading && (
          <Button variant="text" color="inherit" aria-label="Right button" {...rightButtonProps} />
        )}
        {isLoading && <Loader spinner={{ thickness: 5 }} />}
        {linearProps && linearProps.value && linearProps.value > 0 ? (
          <LinearProgress variant="determinate" {...linearProps} />
        ) : null}
      </header>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
