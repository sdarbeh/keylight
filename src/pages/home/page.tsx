import React, { FC, useState } from 'react';
import { ColorLens } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ControlCenter } from 'controllers';
import { ModalContainer } from 'widgets';
import { useApplicationTheme, useDeviceInfo } from 'hooks';
import HomePageWrapper from './page.styled';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { isKeylightActive } = useApplicationTheme();
  const { isDesktop } = useDeviceInfo();
  const [anchorEl, setAnchorEl] = useState<null | any>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HomePageWrapper className="ph5 ui-display-center ui-bg-color-keylight">
      {!isKeylightActive && (
        <div className="ui-color-medium">
          <h1>Keylight off</h1>
          <span>{`${
            isDesktop ? 'Click' : 'Tap'
          } the palette icon in the right corner to adjust settings`}</span>
        </div>
      )}
      <Button
        className="palette"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <ColorLens />
      </Button>
      <ModalContainer
        type="bottom"
        isOpen={isOpen}
        anchorEl={anchorEl}
        onOpen={() => setAnchorEl(<div />)}
        onClose={handleClose}
      >
        <ControlCenter />
      </ModalContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
