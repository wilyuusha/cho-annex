import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

export default function CardGrid({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 17rem), 1fr))',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
}
