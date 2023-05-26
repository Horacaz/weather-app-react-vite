import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: black;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191825;
  border-radius: 10px;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 75px;
`;
export const MaxTemperature = styled.span`
  color: #b70404;
`;

export const MinTemperature = styled.span`
  color: #068da9;
`;

export const Text = styled.p`
  font-weight: bolder;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const TemperatureContainer = styled.div`
  display: flex;
`;
