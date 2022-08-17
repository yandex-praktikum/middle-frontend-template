import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../styles/variables';
import { render } from '@testing-library/react';
import React from 'react';

export function customRender(children: any) {
  return render(<ThemeProvider theme={baseTheme}>{children}</ThemeProvider>);
}
