import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LastUpdated from './LastUpdated';
import type { ScheduleRow } from './types';

interface Props {
  rows: ScheduleRow[];
}

const headerCellSx = {
  bgcolor: 'primary.light',
  color: 'primary.dark',
  fontSize: '0.6875rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
} as const;

function badgeSx() {
  return {
    bgcolor: 'primary.light',
    color: 'primary.dark',
    fontWeight: 700,
    fontSize: '0.6875rem',
  } as const;
}

export default function ScheduleTable({ rows }: Props) {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ borderColor: 'divider', borderRadius: 2 }}
        >
          <Table aria-label="Operating hours" sx={{ minWidth: 608 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={headerCellSx}>Service</TableCell>
                <TableCell sx={headerCellSx}>When</TableCell>
                <TableCell sx={headerCellSx}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.title} hover>
                  <TableCell component="th" scope="row" sx={{ verticalAlign: 'top' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.75 }}>
                      {row.badge ? <Chip label={row.badge} size="small" sx={badgeSx()} /> : null}
                      <Typography component="span" sx={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                        {row.title}
                      </Typography>
                      {row.source ? (
                        <Typography component="span" variant="caption" color="text.secondary">
                          Source:{' '}
                          <Link href={row.source.url} target="_blank" rel="noopener noreferrer" color="primary.dark">
                            {row.source.title}
                            <NorthEastIcon sx={{ fontSize: 12, verticalAlign: 'middle', ml: 0.25 }} />
                          </Link>
                        </Typography>
                      ) : null}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top', maxWidth: '16rem' }}>
                    <Typography component="strong" sx={{ fontSize: '0.9375rem', fontWeight: 700 }}>
                      {row.when}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    {row.notes.length > 0 ? (
                      <Box component="ul" sx={{ pl: 2.25, m: 0, fontSize: '0.9375rem' }}>
                        {row.notes.map((note, index) => (
                          <Box component="li" key={`${note}-${index}`}>
                            {note}
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No additional details.
                      </Typography>
                    )}
                    <LastUpdated updated={row.updated} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2 }}>
        {rows.map((row) => (
          <Card key={row.title} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              {row.badge ? <Chip label={row.badge} size="small" sx={{ ...badgeSx(), mb: 1.25 }} /> : null}
              <Typography component="h3" variant="h3" gutterBottom>
                {row.title}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                When
              </Typography>
              <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{row.when}</Typography>

              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                Details
              </Typography>
              {row.notes.length > 0 ? (
                <Box component="ul" sx={{ pl: 2.25, m: 0, mb: 1.5, fontSize: '0.9375rem' }}>
                  {row.notes.map((note, index) => (
                    <Box component="li" key={`${note}-${index}`}>
                      {note}
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  No additional details.
                </Typography>
              )}

              {row.source ? (
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.75 }}>
                  Source:{' '}
                  <Link href={row.source.url} target="_blank" rel="noopener noreferrer" color="primary.dark">
                    {row.source.title}
                    <NorthEastIcon sx={{ fontSize: 12, verticalAlign: 'middle', ml: 0.25 }} />
                  </Link>
                </Typography>
              ) : null}
              <LastUpdated updated={row.updated} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
