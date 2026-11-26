import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ width: 'min(100% - 2rem, 68rem)', mx: 'auto' }}>
      {children}
    </Box>
  );
}
