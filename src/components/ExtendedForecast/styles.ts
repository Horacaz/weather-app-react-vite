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
export const MaxTemperature = styled.img`
  max-width: 45px;
  filter: invert(21%) sepia(97%) saturate(3260%) hue-rotate(355deg)
    brightness(50%) contrast(80%);
`;

export const MinTemperature = styled.img`
  max-width: 45px;
  filter: invert(75%) sepia(76%) saturate(6133%) hue-rotate(169deg)
    brightness(50%) contrast(85%);
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
