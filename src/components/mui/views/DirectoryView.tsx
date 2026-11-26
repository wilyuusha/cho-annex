import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import Notice from '../Notice';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { DirectoryData } from '../../../data/types';

interface Props {
  directory: DirectoryData;
  layoutPlaceholder: string;
}

export default function DirectoryView({ directory, layoutPlaceholder }: Props) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="Find your way"
          title="Directory"
          lead="Building layout, departments, room locations, and visitor directions. Room assignments may change."
          updated={directory.lastUpdated}
        />

        {directory.visitorNotes.length > 0 ? (
          <Notice title="Visitor directions" icon={<PlaceOutlinedIcon sx={{ fontSize: 16 }} />}>
            <Box component="ul" sx={{ pl: 2.25, m: 0 }}>
              {directory.visitorNotes.map((note) => (
                <Box component="li" key={note} sx={{ fontSize: '0.9375rem' }}>
                  {note}
                </Box>
              ))}
            </Box>
          </Notice>
        ) : null}

        <Box
          component="section"
          aria-labelledby="layout-heading"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' }, gap: 3, alignItems: 'center', mb: 5 }}
        >
          <Box>
            <Typography component="h2" variant="h2" id="layout-heading">
              Building layout
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.0625rem', mt: 1 }}>
              The verified room-by-room layout is being prepared. This placeholder is not the final directory.
            </Typography>
          </Box>
          <Box
            component="figure"
            sx={{ m: 0, border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}
          >
            <Box
              component="img"
              src={layoutPlaceholder}
              alt="Placeholder floor plan with unlabeled rooms"
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>

        <Box component="section" aria-labelledby="rooms-heading">
          <SectionHeader id="rooms-heading" title="Rooms and departments" />
          {directory.rooms.length > 0 ? (
            <CardGrid>
              {directory.rooms.map((room) => (
                <EntryCard
                  key={room.name}
                  title={room.name}
                  meta={[
                    ...(room.floor ? [{ label: 'Floor', value: room.floor }] : []),
                    ...(room.location ? [{ label: 'Location', value: room.location }] : []),
                  ]}
                  details={[...(room.services ?? []).map((service) => `Service: ${service}`), ...(room.notes ?? [])]}
                  source={room.source}
                  updated={room.updated}
                />
              ))}
            </CardGrid>
          ) : (
            <EmptyState
              title="No room information published yet"
              message="Verified room locations and department details will appear here once confirmed."
            />
          )}
        </Box>
      </PageContainer>
    </AppThemeProvider>
  );
}
