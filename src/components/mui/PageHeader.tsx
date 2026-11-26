import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LastUpdated from './LastUpdated';

interface Props {
  eyebrow: string;
  title: string;
  lead: string;
  updated?: string | null;
}

export default function PageHeader({ eyebrow, title, lead, updated }: Props) {
  return (
    <Box
      component="header"
      sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 3, mb: 4 }}
    >
      <Typography component="p" variant="overline" color="primary.dark" sx={{ m: 0, mb: 0.5 }}>
        {eyebrow}
      </Typography>
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: '1.0625rem', maxWidth: '62ch', mt: 1 }}>
        {lead}
      </Typography>
      <LastUpdated updated={updated} />
    </Box>
  );
}
