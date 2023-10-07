import React, { FC } from 'react';
import { Menu, Modal, ModalProps, SwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
import { SubHeader, SubHeaderProps } from 'widgets';
import { useDeviceInfo } from 'hooks';
import { AppColor } from 'constants/application-theme';
import { StyleSheetManager } from 'styled-components';
import ModalContainerWrapper from './modal-container.styled';

export interface ModalContainerProps {
  type: 'center' | 'left' | 'right' | 'bottom' | 'top' | 'sub';
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  anchorEl?: any;
  headerProps?: SubHeaderProps;
  children?: React.ReactNode;
  backgroundColor?: AppColor;
}

const ModalContainer: FC<ModalContainerProps> = ({
  type,
  isOpen,
  onOpen,
  onClose,
  anchorEl,
  headerProps,
  children,
  backgroundColor = 'bravo',
}) => {
  const { isDesktop } = useDeviceInfo();
  const modalContentClass = `modal-container-content modal-container-content-${type}`;
  let component = <div />;

  const modalProps: Omit<ModalProps, 'children'> = {
    open: isOpen,
    onClose,
    disablePortal: true,
    'aria-labelledby': 'content-title',
    'aria-describedby': 'content-description',
  };
  const swiperDrawerProps: SwipeableDrawerProps | undefined = onOpen
    ? {
        onOpen,
        onClose,
        open: isOpen,
        swipeAreaWidth: 60,
        disableSwipeToOpen: true,
        disableDiscovery: true,
        ModalProps: modalProps,
      }
    : undefined;

  const swipeIndicator = (
    <div className="drawer-indicator ui-display-center pv3">
      <span className="ui-bg-color-medium" />
    </div>
  );

  switch (type) {
    case 'center': {
      component = (
        <Modal {...modalProps}>
          <div className={modalContentClass}>{children}</div>
        </Modal>
      );
      break;
    }
    case 'left':
    case 'right':
    case 'top': {
      if (swiperDrawerProps) {
        component = (
          <SwipeableDrawer anchor={type} {...swiperDrawerProps}>
            <div className={modalContentClass}>{children}</div>
            {type === 'top' && swipeIndicator}
          </SwipeableDrawer>
        );
      }
      break;
    }
    case 'bottom': {
      if (isDesktop) {
        component = (
          <Menu disablePortal open={isOpen} anchorEl={anchorEl} onClose={onClose}>
            {children}
          </Menu>
        );
      }
      if (!isDesktop && swiperDrawerProps) {
        component = (
          <SwipeableDrawer anchor="bottom" {...swiperDrawerProps}>
            <div className={modalContentClass}>
              {swipeIndicator}
              {headerProps && <SubHeader {...headerProps} />}
              <div className="bottom-modal-content pv5">{children}</div>
            </div>
          </SwipeableDrawer>
        );
      }
      break;
    }
    case 'sub':
      component = (
        <Modal {...modalProps}>
          <div className={modalContentClass}>
            <div className="ui-display-flex">
              {headerProps && <SubHeader {...headerProps} />}
              <div className="sub-modal-content">{children}</div>
            </div>
          </div>
        </Modal>
      );
      break;
    default:
      break;
  }

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !['backgroundColor'].includes(prop)}>
      <ModalContainerWrapper
        data-testid="ModalContainer"
        backgroundColor={backgroundColor}
        className={`modal-container-wrapper ${type}-modal-container-wrapper`}
      >
        {component}
      </ModalContainerWrapper>
    </StyleSheetManager>
  );
};

export default ModalContainer;
