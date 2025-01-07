import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = true 
}) => {
  const { currentUser, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <LoadingContainer>
        <div>Laden...</div>
      </LoadingContainer>
    );
  }

  if (!currentUser) {
    // Redirect to login with the return URL
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && !isAdmin) {
    // Redirect non-admin users to home
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
