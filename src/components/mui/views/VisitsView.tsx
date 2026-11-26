import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { VisitsData } from '../../../data/types';

interface Props {
  visits: VisitsData;
}

export default function VisitsView({ visits }: Props) {
  const entries = [...visits.entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="In the community"
          title="Visits"
          lead="Barangay visits, outreach programs, and community activities. These are temporary activities, not regular office schedules."
          updated={visits.lastUpdated}
        />

        {entries.length > 0 ? (
          <Box component="section" aria-labelledby="visits-heading">
            <SectionHeader id="visits-heading" title="Published visits and activities" icon={<GroupsIcon />} />
            <CardGrid>
              {entries.map((entry) => (
                <EntryCard
                  key={entry.title}
                  title={entry.title}
                  badge={entry.status || 'Activity'}
                  meta={[
                    { label: 'Date', value: entry.date },
                    ...(entry.time ? [{ label: 'Time', value: entry.time }] : []),
                    ...(entry.barangay ? [{ label: 'Barangay', value: entry.barangay }] : []),
                    ...(entry.activity ? [{ label: 'Activity', value: entry.activity }] : []),
                  ]}
                  details={[...(entry.summary ? [entry.summary] : []), ...(entry.notes ?? [])]}
                  source={entry.source}
                  updated={entry.updated}
                />
              ))}
            </CardGrid>
          </Box>
        ) : (
          <EmptyState
            title="No visits published yet"
            message="Verified barangay visits, outreach programs, and community activities will appear here once confirmed."
          />
        )}
      </PageContainer>
    </AppThemeProvider>
  );
}
