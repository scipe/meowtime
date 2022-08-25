import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';
// import Loader from '../components/Loader/Loader';

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default ProtectedRoute;
