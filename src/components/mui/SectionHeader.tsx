import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import LastUpdated from './LastUpdated';

interface Props {
  id?: string;
  title: string;
  description?: string;
  updated?: string | null;
  icon?: ReactNode;
}

export default function SectionHeader({ id, title, description, updated, icon }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 1,
        mb: 2,
      }}
    >
      <Box>
        <Typography
          component="h2"
          variant="h2"
          id={id}
          sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.dark' }}
        >
          {icon ? (
            <Box component="span" sx={{ display: 'inline-flex', color: 'primary.dark' }}>
              {icon}
            </Box>
          ) : null}
          {title}
        </Typography>
        {description ? (
          <Typography color="text.secondary" sx={{ fontSize: '0.9375rem', mt: 0.25 }}>
            {description}
          </Typography>
        ) : null}
      </Box>
      <LastUpdated updated={updated} />
    </Box>
  );
}
