import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import type { DoctorsData, DoctorEntry } from '../data/types';
import { choTheme } from '../theme';

interface Props {
  data: DoctorsData;
}

const headerCellSx = {
  bgcolor: '#f6faf6',
  color: 'primary.dark',
  fontSize: '0.6875rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
} as const;

function isOnOpd(doctor: DoctorEntry, day: string) {
  return Boolean(doctor.assignments[day.toLowerCase()]?.includes('OPD'));
}

export default function DoctorScheduleTable({ data }: Props) {
  return (
    <ThemeProvider theme={choTheme}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
        >
          <Table aria-label="OPD schedule of doctors" size="small" sx={{ minWidth: 864 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={headerCellSx}>Doctor</TableCell>
                {data.days.map((day) => (
                  <TableCell key={day} align="center" sx={headerCellSx}>
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.doctors.map((doctor) => (
                <TableRow key={doctor.name} hover>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: '0.875rem', fontWeight: 500, minWidth: 208 }}
                  >
                    {doctor.name}
                  </TableCell>
                  {data.days.map((day) => (
                    <TableCell key={day} align="center">
                      {isOnOpd(doctor, day) ? (
                        <CheckIcon color="primary" fontSize="small" titleAccess="On OPD" />
                      ) : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 1.5 }}>
        {data.doctors.map((doctor) => (
          <Card key={doctor.name} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography component="h3" variant="h3" sx={{ fontSize: '0.9375rem', mb: 1 }}>
                {doctor.name}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {data.days.map((day) =>
                  isOnOpd(doctor, day) ? (
                    <Chip
                      key={day}
                      label={day}
                      size="small"
                      icon={<CheckIcon fontSize="small" />}
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.dark',
                        fontWeight: 600,
                        '& .MuiChip-icon': { color: 'primary.main' },
                      }}
                    />
                  ) : null,
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography
        component="p"
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mt: 1 }}
      >
        {data.sourceNote}
      </Typography>
    </ThemeProvider>
  );
}
