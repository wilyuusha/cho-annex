import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import type { ReactNode } from 'react';
import AppThemeProvider from './AppThemeProvider';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import type { Logos, SiteInfo } from './types';

interface Props {
  site: SiteInfo;
  logos: Logos;
  currentPath: string;
  base: string;
  children: ReactNode;
}

export default function AppShell({ site, logos, currentPath, base, children }: Props) {
  return (
    <AppThemeProvider baseline>
      <Link
        href="#main-content"
        sx={{
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: 1400,
          bgcolor: 'primary.main',
          color: '#ffffff',
          p: 1,
          '&:focus': { left: 16, top: 16 },
        }}
      >
        Skip to main content
      </Link>
      <SiteHeader site={site} logos={logos} currentPath={currentPath} base={base} />
      <Box component="main" id="main-content" sx={{ minHeight: '60vh', py: { xs: 3, md: 4 } }}>
        {children}
      </Box>
      <SiteFooter site={site} logos={logos} base={base} />
    </AppThemeProvider>
  );
}
