import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 8px 16px;
  box-sizing: border-box;
  background: black;
  width: 18.5%;
  height: 500px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  border-radius: 12px;
  margin: 10px;
`;

export const Img = styled.img`
  height: 85%;
  width: 98%;
  object-fit: cover;
  align-self: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ebeef5;
  margin: 10px 10px;
`;
