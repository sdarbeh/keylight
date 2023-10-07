import { useEffect, useState } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isDesktop: boolean;
  browserName: string;
  operatingSystem: string;
}

const Hook = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isDesktop: false,
    browserName: 'Unknown',
    operatingSystem: 'Unknown',
  });

  useEffect(() => {
    const { userAgent } = window.navigator;

    // Check if the device is a mobile device
    const isMobile = /Mobile/.test(userAgent);
    const isDesktop = !isMobile;

    // Get the browser name
    let browserName = 'Unknown';
    if (/Edge/.test(userAgent)) {
      browserName = 'Microsoft Edge';
    } else if (/Firefox/.test(userAgent)) {
      browserName = 'Mozilla Firefox';
    } else if (/Chrome/.test(userAgent)) {
      browserName = 'Google Chrome';
    } else if (/Safari/.test(userAgent)) {
      browserName = 'Apple Safari';
    } else if (/Opera/.test(userAgent)) {
      browserName = 'Opera';
    }

    // Detect the operating system
    let operatingSystem = 'Unknown';
    if (/Android/.test(userAgent)) {
      operatingSystem = 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      operatingSystem = 'iOS (Apple)';
    } else if (/Windows/.test(userAgent)) {
      operatingSystem = 'Windows';
    } else if (/Linux/.test(userAgent)) {
      operatingSystem = 'Linux';
    } else if (/Mac OS|Macintosh/.test(userAgent)) {
      operatingSystem = 'macOS (Apple)';
    }

    setDeviceInfo({
      isMobile,
      isDesktop,
      browserName,
      operatingSystem,
    });
  }, []);

  return deviceInfo;
};

export default Hook;
