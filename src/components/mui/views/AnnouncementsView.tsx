import Box from '@mui/material/Box';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { AnnouncementsData } from '../../../data/types';

interface Props {
  announcements: AnnouncementsData;
}

export default function AnnouncementsView({ announcements }: Props) {
  const entries = [...announcements.entries].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="Stay informed"
          title="Announcements"
          lead="Public advisories and temporary changes. Check this page for updates that override regular schedules."
          updated={announcements.lastUpdated}
        />

        {entries.length > 0 ? (
          <Box component="section" aria-labelledby="announcements-heading">
            <SectionHeader id="announcements-heading" title="Current and recent notices" icon={<CampaignIcon />} />
            <CardGrid>
              {entries.map((entry) => (
                <EntryCard
                  key={entry.title}
                  title={entry.title}
                  badge={entry.category}
                  meta={[
                    { label: 'Published', value: entry.published },
                    ...(entry.until ? [{ label: 'Until', value: entry.until }] : []),
                  ]}
                  details={[entry.body, ...(entry.notes ?? [])]}
                  source={entry.source}
                  updated={entry.updated}
                />
              ))}
            </CardGrid>
          </Box>
        ) : (
          <EmptyState
            title="No announcements published yet"
            message="Verified advisories and temporary schedule changes will appear here once available."
          />
        )}
      </PageContainer>
    </AppThemeProvider>
  );
}
