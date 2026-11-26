import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import ContactCard from '../ContactCard';
import EntryCard from '../EntryCard';
import Notice from '../Notice';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import ServiceCategoryIcon from '../ServiceCategoryIcon';
import type { ServiceCategory, ServicesData } from '../../../data/types';
import type { SiteInfo } from '../types';

interface Props {
  services: ServicesData;
  category: ServiceCategory;
  site: SiteInfo;
  base: string;
}

export default function ServiceCategoryView({ services, category, site, base }: Props) {
  const items = services.services.filter((service) => service.category === category.id);

  return (
    <AppThemeProvider>
      <PageContainer>
        <Box sx={{ mb: 2 }}>
          <Button href={`${base}services/`} startIcon={<ArrowBackIcon />} sx={{ color: 'primary.dark' }}>
            All service categories
          </Button>
        </Box>

        <PageHeader
          eyebrow="Services"
          title={category.label}
          lead={category.description ?? 'Services offered at the City Health Office Annex.'}
          updated={services.lastUpdated}
        />

        {services.notice ? (
          <Notice title="Please confirm before your visit" icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}>
            <Typography variant="body2">{services.notice}</Typography>
          </Notice>
        ) : null}

        <Box component="section" aria-labelledby="category-services-heading">
          <SectionHeader
            id="category-services-heading"
            title={`${items.length} ${items.length === 1 ? 'service' : 'services'}`}
            description="Published days are transcribed from the source and may change."
            icon={<ServiceCategoryIcon id={category.id} />}
          />
          <CardGrid>
            {items.map((service) => (
              <EntryCard
                key={service.id}
                title={service.name}
                badge={service.verification}
                meta={[
                  { label: 'When', value: service.availability ?? 'To be confirmed' },
                  ...(service.effectiveDate ? [{ label: 'Effective', value: service.effectiveDate }] : []),
                ]}
                details={[
                  ...(service.description ? [service.description] : []),
                  ...(service.requirements ?? []).map((item) => `Requirement: ${item}`),
                  ...(service.notes ?? []),
                ]}
                source={service.source}
                sourceNote={service.sourceNote}
              />
            ))}
          </CardGrid>
        </Box>

        <ContactCard site={site} />
      </PageContainer>
    </AppThemeProvider>
  );
}
