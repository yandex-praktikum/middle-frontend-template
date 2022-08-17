import styled from 'styled-components';

const ButtonSettings = styled.button`
  display: block;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.allColors.white};
  font-size: 12px;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.allColors.white};
  cursor: pointer;
`;

export default ButtonSettings;
