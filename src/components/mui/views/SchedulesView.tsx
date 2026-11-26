import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import Notice from '../Notice';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { SchedulesData } from '../../../data/types';

interface Props {
  schedules: SchedulesData;
  base: string;
}

const sections = [
  {
    key: 'regularHours',
    title: 'Operating hours',
    description: 'Regular office hours.',
    icon: <ScheduleIcon />,
    emptyTitle: 'No verified hours published yet',
    emptyMessage: 'Regular operating hours will appear here after they are confirmed.',
  },
  {
    key: 'abtc',
    title: 'Animal Bite Treatment Center (ABTC) Schedule',
    description: 'Regular Animal Bite Treatment Center (ABTC) schedule.',
    icon: <HealthAndSafetyIcon />,
    emptyTitle: 'No Animal Bite Treatment Center (ABTC) schedule published yet',
    emptyMessage: 'Verified Animal Bite Treatment Center (ABTC) dates and times will appear here.',
  },
  {
    key: 'yakap',
    title: 'YAKAP activities',
    description: 'Scheduled YAKAP activities.',
    icon: <VolunteerActivismIcon />,
    emptyTitle: 'No YAKAP activities published yet',
    emptyMessage: 'Verified YAKAP activity dates will appear here.',
  },
  {
    key: 'serviceAvailability',
    title: 'Service availability',
    description: 'When regular services are available.',
    icon: <EventAvailableIcon />,
    emptyTitle: 'No service availability published yet',
    emptyMessage: 'Verified service days and times will appear here.',
  },
] as const;

export default function SchedulesView({ schedules, base }: Props) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="Plan your visit"
          title="Schedules"
          lead="Regular schedules and temporary activities are listed separately. Always check the latest announcements for short-term changes."
          updated={schedules.lastUpdated}
        />

        <Notice title="Regular vs. temporary" icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}>
          <Typography variant="body2">
            The sections below describe routine schedules. Temporary changes are posted on the{' '}
            <Link href={`${base}announcements/`} color="primary.dark">
              announcements page
            </Link>
            .
          </Typography>
        </Notice>

        {sections.map((section) => {
          const entries = schedules[section.key];
          return (
            <Box component="section" aria-labelledby={`schedule-${section.key}`} key={section.key} sx={{ mb: 5 }}>
              <SectionHeader
                id={`schedule-${section.key}`}
                title={section.title}
                description={section.description}
                icon={section.icon}
              />
              {entries.length > 0 ? (
                <CardGrid>
                  {entries.map((entry) => (
                    <EntryCard
                      key={entry.title}
                      title={entry.title}
                      meta={[
                        { label: 'When', value: entry.when || 'To be confirmed' },
                        ...(entry.effectiveDate ? [{ label: 'Effective', value: entry.effectiveDate }] : []),
                      ]}
                      details={entry.notes ?? []}
                      source={entry.source}
                      updated={entry.updated}
                    />
                  ))}
                </CardGrid>
              ) : (
                <EmptyState title={section.emptyTitle} message={section.emptyMessage} />
              )}
            </Box>
          );
        })}
      </PageContainer>
    </AppThemeProvider>
  );
}
