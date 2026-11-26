import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LogoPair from './LogoPair';
import type { Logos, SiteInfo } from './types';

interface Props {
  site: SiteInfo;
  logos: Logos;
  currentPath: string;
  base: string;
}

const navItems = [
  { label: 'Home', slug: '/' },
  { label: 'Services', slug: '/services' },
  { label: 'Doctors', slug: '/doctors' },
  { label: 'Directory', slug: '/directory' },
  { label: 'Announcements', slug: '/announcements' },
];

function isActivePath(currentPath: string, slug: string) {
  return slug === '/' ? currentPath === '/' : currentPath === slug || currentPath.startsWith(`${slug}/`);
}

function hrefFor(slug: string, base: string) {
  return slug === '/' ? base : `${base}${slug.replace(/^\//, '')}/`;
}

export default function SiteHeader({ site, logos, currentPath, base }: Props) {
  return (
    <Box component="header" sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Box
        sx={{
          width: 'min(100% - 2rem, 68rem)',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          gap: 1,
          py: 1,
        }}
      >
        <Link
          href={hrefFor('/', base)}
          aria-label={`${site.name} home`}
          sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: 'inherit', textDecoration: 'none' }}
        >
          <LogoPair logos={logos} height={36} loading="eager" />
          <Box>
            <Typography sx={{ fontSize: '0.9375rem', fontWeight: 700, lineHeight: 1.25 }}>
              {site.shortName}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.25 }}>
              {site.location}
            </Typography>
          </Box>
        </Link>

        <Box
          component="nav"
          aria-label="Primary"
          sx={{
            ml: { xs: 0, md: 'auto' },
            mt: { xs: 0.75, md: 0 },
            maxWidth: '100%',
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            bgcolor: { xs: 'primary.light', md: 'transparent' },
            borderRadius: { xs: '999px', md: 0 },
            p: { xs: 0.5, md: 0 },
          }}
        >
          <Box
            component="ul"
            sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, listStyle: 'none', p: 0, m: 0, gap: { xs: 0.25, md: 0.5 } }}
          >
            {navItems.map((item) => {
              const isActive = isActivePath(currentPath, item.slug);
              return (
                <Box component="li" key={item.slug}>
                  <Button
                    href={hrefFor(item.slug, base)}
                    aria-current={isActive ? 'page' : undefined}
                    sx={{
                      fontSize: '0.875rem',
                      color: { xs: isActive ? '#fff' : 'primary.dark', md: isActive ? 'primary.dark' : 'text.primary' },
                      bgcolor: { xs: isActive ? 'primary.main' : 'transparent', md: 'transparent' },
                      borderBottom: { xs: 'none', md: '2px solid' },
                      borderColor: { xs: 'transparent', md: isActive ? 'primary.main' : 'transparent' },
                      borderRadius: { xs: '999px', md: 0 },
                      px: { xs: 1.5, md: 1 },
                      py: { xs: 0.5, md: 0.5 },
                      minWidth: 0,
                      boxShadow: { xs: isActive ? '0 2px 6px -2px rgba(46, 125, 50, 0.6)' : 'none', md: 'none' },
                      '&:hover': {
                        bgcolor: { xs: isActive ? 'primary.dark' : 'rgba(255, 255, 255, 0.6)', md: 'primary.light' },
                        borderColor: { xs: 'transparent', md: isActive ? 'primary.main' : 'divider' },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
