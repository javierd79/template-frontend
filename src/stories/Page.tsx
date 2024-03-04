import { lazy } from 'react';
const NotFoundPage = lazy(() => import('../pages/errors/404'));

interface INotFound {
  /**
   * Sent code of error to display the correct message
   */
  errorCode: 404 | 401 | 500;
}

export const NotFound = ({
  errorCode,
  ...props
}: INotFound) => {
  return (
    <NotFoundPage errorCode={errorCode} {...props} />
  );
};
