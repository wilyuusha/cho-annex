import Box from '@mui/material/Box';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { ServicesData } from '../../../data/types';

interface Props {
  services: ServicesData;
}

export default function ServicesView({ services }: Props) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="What we offer"
          title="Services"
          lead="Available services and their requirements. Service details are subject to change, so check the latest announcements before your visit."
          updated={services.lastUpdated}
        />

        {services.services.length > 0 ? (
          <Box component="section" aria-labelledby="services-heading">
            <SectionHeader id="services-heading" title="Available services" icon={<MedicalServicesIcon />} />
            <CardGrid>
              {services.services.map((service) => (
                <EntryCard
                  key={service.name}
                  title={service.name}
                  meta={service.availability ? [{ label: 'Availability', value: service.availability }] : []}
                  details={[
                    ...(service.description ? [service.description] : []),
                    ...(service.requirements ?? []).map((item) => `Requirement: ${item}`),
                    ...(service.notes ?? []),
                  ]}
                  source={service.source}
                  updated={service.updated}
                />
              ))}
            </CardGrid>
          </Box>
        ) : (
          <EmptyState
            title="No services published yet"
            message="Verified services and requirements will appear here once available."
          />
        )}
      </PageContainer>
    </AppThemeProvider>
  );
}
