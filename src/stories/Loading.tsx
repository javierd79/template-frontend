import { lazy, ReactNode } from 'react';

const LoadingSP = lazy(() => import('../components/Loading'));

interface ILoading {
  /**
   * Do you want to be full screen?
   */
  full?: boolean;
  /**
   * Any message that needs to be displayed
   */
  message?: string;
  /**
   * Do you want to set any element inside?
   */
  children?: ReactNode;
  /**
   * Do you like borders?
   */
  withBorder?: boolean;
  /**
   * Optional background blur
   */
  backgroundBlur?: boolean;
  /**
   * Adds colors to loader
   */
  color?: string;
  /**
   * Turn on dark mode
   */
  scheme?: "light" | "dark";
  /**
   * Margin for the loader container
   */
  margin?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Loading = ({
  full = false,
  message,
  withBorder = false,
  backgroundBlur = false,
  color,
  children,
  margin,
  scheme,
  ...props
}: ILoading) => {
  return (
    <LoadingSP
      full={full}
      message={message}
      color={color}
      withBorder={withBorder}
      backgroundBlur={backgroundBlur}
      scheme={scheme}
      margin={margin}
      {...props}
    >
      {children}
    </LoadingSP>
  );
};
