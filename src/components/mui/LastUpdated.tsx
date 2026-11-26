import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  updated?: string | null;
  label?: string;
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function LastUpdated({ updated = null, label = 'Last updated' }: Props) {
  if (!updated) {
    return (
      <Typography component="p" variant="caption" color="text.secondary" role="note" sx={{ fontStyle: 'italic', m: 0 }}>
        Information pending verification.
      </Typography>
    );
  }

  return (
    <Typography component="p" variant="caption" color="text.secondary" sx={{ m: 0 }}>
      {label}: <Box component="time" dateTime={updated}>{formatDate(updated)}</Box>
    </Typography>
  );
}
