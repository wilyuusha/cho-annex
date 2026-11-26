import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppThemeProvider from '../AppThemeProvider';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';

export default function NotFoundView({ base }: { base: string }) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="404"
          title="Page not found"
          lead="The page you were looking for is not available on this site."
        />
        <Box sx={{ mt: 2 }}>
          <Button href={base} variant="outlined">
            Return to the home page
          </Button>
        </Box>
      </PageContainer>
    </AppThemeProvider>
  );
}
