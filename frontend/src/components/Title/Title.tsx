import React, { FC } from 'react';

import { H1St, H2St, H3St, H4St } from './style';

/**
 * В компонент передаются пропсы:
 * @param h - число, от 1 до 4, определяющее уровень заголовка
 */

interface TitleProps {
  h: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  center?: boolean;
}

const Title: FC<TitleProps> = ({ h, center, children }) => {
  return (
    <>
      {h === 1 && <H1St isCenter={center}>{children}</H1St>}
      {h === 2 && <H2St isCenter={center}>{children}</H2St>}
      {h === 3 && <H3St isCenter={center}>{children}</H3St>}
      {h === 4 && <H4St isCenter={center}>{children}</H4St>}
    </>
  );
};

export default Title;
