import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import type { SiteInfo } from './types';

interface Props {
  site: SiteInfo;
  title?: string;
}

export default function ContactCard({
  site,
  title = 'Need to confirm a service?',
}: Props) {
  const telHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`;

  return (
    <Paper
      role="note"
      sx={{
        bgcolor: 'primary.light',
        borderLeft: '2px solid',
        borderColor: 'primary.main',
        borderRadius: 2,
        p: { xs: 2, md: 2.5 },
        mt: 4,
      }}
    >
      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '62ch' }}>
        Contact the office to confirm days, requirements, and fees before your visit.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          mt: 1.5,
        }}
      >
        <Link
          href={telHref}
          color="primary.dark"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
        >
          <PhoneIcon sx={{ fontSize: 16 }} />
          {site.phone}
        </Link>
        <Link
          href={`mailto:${site.healthEmail}`}
          color="primary.dark"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
        >
          <MailOutlinedIcon sx={{ fontSize: 16 }} />
          {site.healthEmail}
        </Link>
      </Box>
    </Paper>
  );
}
