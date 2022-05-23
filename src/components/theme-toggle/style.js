import styled from 'styled-components';

const Label = styled.label`
  transition: ease 0.25s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 50px;
  height: 27px;
  width: 55px;
  background-color: #111;
  &:hover {
    cursor: pointer;
  }
`;

const Ball = styled.div`
  transition: ease 0.25s;
  position: absolute;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.white};
  border-radius: 50%;
  left: 5px;
`;

const Slider = styled.input`
  display: none;
  &:checked + ${Label} {
    background: ${({ theme }) => theme.textColor};
  }
  &:checked + ${Label} ${Ball} {
    transform: translateX(28px);
    background: ${({ theme }) => theme.background};
  }
`;

export { Slider, Label, Ball };
