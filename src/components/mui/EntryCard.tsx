import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LastUpdated from './LastUpdated';
import type { CardSource, MetaItem } from './types';

interface Props {
  title: string;
  meta?: MetaItem[];
  details?: string[];
  badge?: string;
  source?: CardSource;
  updated?: string | null;
}

export default function EntryCard({ title, meta = [], details = [], badge, source, updated = null }: Props) {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        {badge ? (
          <Chip
            label={badge}
            size="small"
            sx={{ mb: 1.25, bgcolor: 'primary.light', color: 'primary.dark', fontWeight: 700, fontSize: '0.6875rem' }}
          />
        ) : null}

        <Typography component="h3" variant="h3">
          {title}
        </Typography>

        {meta.length > 0 ? (
          <Box
            component="dl"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '6.5rem 1fr' },
              gap: 0.5,
              mt: 1.5,
              mb: 0,
            }}
          >
            {meta.map((item) => (
              <Box key={item.label} sx={{ display: 'contents' }}>
                <Box component="dt" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.875rem' }}>
                  {item.label}
                </Box>
                <Box component="dd" sx={{ m: 0, fontSize: '0.875rem' }}>
                  {item.value}
                </Box>
              </Box>
            ))}
          </Box>
        ) : null}

        {details.length > 0 ? (
          <Box component="ul" sx={{ pl: 2.25, mt: 1.5, mb: 1.5, fontSize: '0.875rem' }}>
            {details.map((detail, index) => (
              <Box component="li" key={`${detail}-${index}`} sx={{ mb: 0.25 }}>
                {detail}
              </Box>
            ))}
          </Box>
        ) : null}

        {source ? (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.75 }}>
            Source:{' '}
            <Link href={source.url} target="_blank" rel="noopener noreferrer" color="primary.dark">
              {source.title}
              <NorthEastIcon sx={{ fontSize: 12, verticalAlign: 'middle', ml: 0.25 }} />
            </Link>
          </Typography>
        ) : null}

        <LastUpdated updated={updated} />
      </CardContent>
    </Card>
  );
}
