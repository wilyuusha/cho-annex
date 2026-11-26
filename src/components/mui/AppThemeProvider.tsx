import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { choTheme } from '../../theme';

interface Props {
  children: ReactNode;
  baseline?: boolean;
}

// Wrap every MUI root so client islands and SSR output share the same theme.
export default function AppThemeProvider({ children, baseline = false }: Props) {
  return (
    <ThemeProvider theme={choTheme}>
      {baseline ? <CssBaseline /> : null}
      {children}
    </ThemeProvider>
  );
}
