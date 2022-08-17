import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { CenterSt, BigSt, SmallSt, ContainerTitleSt } from './style';

interface ErrorPageTemplateProps {
  title: string;
  subtitle: string;
  noBtn?: boolean;
}

const ErrorPageTemplate: FC<ErrorPageTemplateProps> = ({
  title,
  subtitle,
  noBtn = false,
}) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <CenterSt>
      <ContainerTitleSt noBtn={noBtn}>
        <BigSt>{title}</BigSt>
        <SmallSt>{subtitle}</SmallSt>
      </ContainerTitleSt>

      {!noBtn && (
        <Button fullWidth={false} onClick={goBack} center>
          назад
        </Button>
      )}
    </CenterSt>
  );
};

export default ErrorPageTemplate;
