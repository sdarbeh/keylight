import { CircularProgressProps } from '@mui/material';
import { AppColor } from 'constants/application-theme';

export interface BaseLoaderProps {
  background?: 'solid' | 'modal' | 'transparent';
  backgroundColor?: AppColor;
  color?: AppColor;
  scale?: number;
}

export interface LoaderProps extends BaseLoaderProps {
  ellipsis?: EllipsisProps | boolean;
  spinner?: SpinnerProps | boolean;
  children?: React.ReactNode;
}

export interface EllipsisProps {}

export interface SpinnerProps extends Omit<CircularProgressProps, 'size' | 'color'> {}
