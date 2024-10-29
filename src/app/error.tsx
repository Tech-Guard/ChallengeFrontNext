"use client"; 
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const ErrorMessage = styled.h1`
  font-size: 2.5rem;
  color: #d9534f;
  font-weight: bold;
  text-align: center;
`;

export default function Error() {
  return (
    <ErrorContainer>
      <ErrorMessage>Erro 404 - Página não encontrada</ErrorMessage>
    </ErrorContainer>
  );
}