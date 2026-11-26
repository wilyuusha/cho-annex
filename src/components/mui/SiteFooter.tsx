import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LogoPair from './LogoPair';
import type { Logos, SiteInfo } from './types';

interface Props {
  site: SiteInfo;
  logos: Logos;
  base: string;
}

export default function SiteFooter({ site, logos, base }: Props) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#e8f5e9',
        backgroundImage:
          'radial-gradient(circle at 90% 0%, rgba(249, 168, 37, 0.18), transparent 40%), linear-gradient(135deg, #e8f5e9, #f6faf6, #ffffff)',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: 'min(100% - 2rem, 68rem)',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: { xs: 'center', md: 'space-between' },
          textAlign: { xs: 'center', md: 'left' },
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 1.5,
          }}
        >
          <LogoPair logos={logos} height={44} decorative />
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 0.25 }}>{site.shortName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {site.unit} · {site.location}
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 0.5, mt: 0.5 }}
            >
              <PlaceOutlinedIcon sx={{ fontSize: 14 }} />
              <span>{site.address}</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 0.5 }}
            >
              <MailOutlinedIcon sx={{ fontSize: 14 }} />
              <Link href={`mailto:${site.healthEmail}`} color="primary.dark">
                {site.healthEmail}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 0.5 }}
            >
              <PhoneIcon sx={{ fontSize: 14 }} />
              <Link href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} color="primary.dark">
                {site.phone}
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2">Public information only. Details are subject to change.</Typography>
          <Typography variant="body2">
            <Link href={`${base}announcements/`} color="primary.dark">
              View advisories and announcements
            </Link>
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5, mt: 0.5 }}
          >
            <Link
              href={site.social.choFacebook}
              target="_blank"
              rel="noopener noreferrer"
              color="primary.dark"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
            >
              <FacebookIcon sx={{ fontSize: 14 }} /> City Health Office on Facebook
            </Link>
            <Link
              href={site.social.cityFacebook}
              target="_blank"
              rel="noopener noreferrer"
              color="primary.dark"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
            >
              <FacebookIcon sx={{ fontSize: 14 }} /> City Government of Valencia on Facebook
            </Link>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Address and health office contact from public City of Valencia information.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
