import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  width: 100%;
  height: 100%;

  border: 1px solid #323b54;
  box-sizing: border-box;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.text.primaryDark};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #475069;
  }
`;
