import Box from '@mui/material/Box';
import type { Logos } from './types';

interface Props {
  logos: Logos;
  height?: number;
  decorative?: boolean;
  loading?: 'lazy' | 'eager';
}

export default function LogoPair({ logos, height = 36, decorative = false, loading = 'lazy' }: Props) {
  const alt = (text: string) => (decorative ? '' : text);
  const ariaHidden = decorative ? 'true' : undefined;
  const imageSx = { height, width: 'auto', display: 'block', objectFit: 'contain' };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
      <Box
        component="img"
        src={logos.cho.src}
        alt={alt('City Health Office logo')}
        aria-hidden={ariaHidden}
        loading={loading}
        sx={imageSx}
      />
      <Box
        component="img"
        src={logos.lgu.src}
        alt={alt('Valencia City LGU logo')}
        aria-hidden={ariaHidden}
        loading={loading}
        sx={imageSx}
      />
    </Box>
  );
}
