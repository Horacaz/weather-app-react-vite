import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
`;
export const Divider = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
 `;

export const ForecastImage = styled.img`
  max-width: 75px;
`;

export const Icon = styled.img`
  max-width: 35px;
`;

export const Text = styled.p`
  font-weight: bolder;
  margin: 0.5rem;
`;

export const Title = styled.h2`
  align-self: flex-start;
  font-weight: bolder;
  margin: 1rem;
`;

export const Button = styled.button`
  margin: 0.2rem;
`;
