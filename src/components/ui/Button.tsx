import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ $fullWidth?: boolean }>`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: var(--primary);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  &:hover {
    background-color: var(--primary-dark);
  }

  &:disabled {
    background-color: var(--border);
    cursor: not-allowed;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth, ...props }) => {
  return (
    <StyledButton $fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
