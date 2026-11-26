import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
  message: string;
}

export default function EmptyState({ title, message }: Props) {
  return (
    <Paper
      variant="outlined"
      role="note"
      sx={{ borderTop: '2px solid', borderColor: 'divider', p: 2.5 }}
    >
      <Typography component="h3" variant="h3" sx={{ fontSize: '0.9375rem', mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Paper>
  );
}
