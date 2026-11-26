import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface Props {
  availability: string | null;
  days: string[];
  hours?: {
    opens: string;
    closes: string;
    timezone: string;
  } | null;
}

const weekdays = [
  { name: 'Monday', short: 'Mon' },
  { name: 'Tuesday', short: 'Tue' },
  { name: 'Wednesday', short: 'Wed' },
  { name: 'Thursday', short: 'Thu' },
  { name: 'Friday', short: 'Fri' },
] as const;

function formatTime(value: string) {
  const [hourText, minute] = value.split(':');
  const hour = Number(hourText);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour}:${minute} ${suffix}`;
}

export default function ServiceSchedule({ availability, days, hours }: Props) {
  const activeDays = new Set(days);

  return (
    <Box
      sx={{
        mt: 1.5,
        p: 1.5,
        borderRadius: 2,
        bgcolor: 'primary.light',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          color: 'primary.dark',
          fontWeight: 700,
          fontSize: '0.9375rem',
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: 18 }} />
        {availability || 'Schedule to be confirmed'}
      </Typography>

      {days.length > 0 ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.25 }}>
          {weekdays.map((day) => {
            const isActive = activeDays.has(day.name);
            return (
              <Chip
                key={day.name}
                label={day.short}
                size="small"
                sx={{
                  height: 24,
                  fontWeight: isActive ? 700 : 500,
                  bgcolor: isActive ? 'primary.main' : 'background.paper',
                  color: isActive ? '#ffffff' : 'text.secondary',
                  border: '1px solid',
                  borderColor: isActive ? 'primary.main' : 'divider',
                }}
              />
            );
          })}
        </Box>
      ) : null}

      {hours ? (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
          Clinic hours: {formatTime(hours.opens)}–{formatTime(hours.closes)} ({hours.timezone})
        </Typography>
      ) : null}
    </Box>
  );
}
