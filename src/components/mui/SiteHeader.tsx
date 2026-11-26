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
  { label: 'Directory', slug: '/directory' },
  { label: 'Announcements', slug: '/announcements' },
];

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
          flexWrap: 'wrap',
          alignItems: 'center',
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
          sx={{ ml: 'auto', maxWidth: '100%', overflowX: 'auto', scrollbarWidth: 'thin' }}
        >
          <Box component="ul" sx={{ display: 'flex', listStyle: 'none', p: 0, m: 0, gap: 0.5 }}>
            {navItems.map((item) => {
              const isActive = currentPath === item.slug;
              return (
                <Box component="li" key={item.slug}>
                  <Button
                    href={hrefFor(item.slug, base)}
                    aria-current={isActive ? 'page' : undefined}
                    sx={{
                      fontSize: '0.875rem',
                      color: isActive ? 'primary.dark' : 'text.primary',
                      borderBottom: '2px solid',
                      borderColor: isActive ? 'primary.main' : 'transparent',
                      borderRadius: 0,
                      px: 1,
                      py: 0.5,
                      minWidth: 0,
                      '&:hover': { bgcolor: 'primary.light', borderColor: 'divider' },
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
