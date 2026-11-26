import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function Notice({ title, icon, children }: Props) {
  return (
    <Paper
      role="note"
      sx={{
        bgcolor: 'warning.light',
        borderLeft: '2px solid',
        borderColor: 'warning.main',
        borderRadius: 1,
        p: 2,
        mb: 3,
      }}
    >
      <Typography component="p" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.75, m: 0, mb: 0.5 }}>
        {icon}
        {title}
      </Typography>
      <Box sx={{ fontSize: '0.9375rem', color: 'text.primary' }}>{children}</Box>
    </Paper>
  );
}
