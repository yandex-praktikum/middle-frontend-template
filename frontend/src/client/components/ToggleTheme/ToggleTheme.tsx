import React from "react";
import { WrapSwithSt } from './style';
import Button from '../../components/Button';
import MainContainer from '../../components/MainContainer';
interface ToggleThemeProps {
  onChange?: (() => void) | any;
  value?: boolean;
}

const ToggleTheme = (props: ToggleThemeProps) => {
  const { onChange, value } = props;
  return (
    <MainContainer>
      <WrapSwithSt>
        <Button onClick={onChange}>
          {value ? 'темная тема' : 'светлая тема'}
        </Button>
      </WrapSwithSt>
    </MainContainer>
  )
}

export default ToggleTheme;
