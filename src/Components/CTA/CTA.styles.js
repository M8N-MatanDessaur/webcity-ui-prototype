import styled from 'styled-components';

export const CTATitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const BlurerdBackground = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: #ffffffa0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;