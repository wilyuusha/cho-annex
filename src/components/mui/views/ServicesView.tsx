import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TocIcon from '@mui/icons-material/Toc';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import ContactCard from '../ContactCard';
import Notice from '../Notice';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import ServiceCategoryIcon from '../ServiceCategoryIcon';
import type { ServicesData } from '../../../data/types';
import type { SiteInfo } from '../types';

interface Props {
  services: ServicesData;
  site: SiteInfo;
  base: string;
}

export default function ServicesView({ services, site, base }: Props) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="What we offer"
          title="Services"
          lead="Browse the services offered at the City Health Office Annex. Choose a category to see the listed services and their published days."
          updated={services.lastUpdated}
        />

        {services.notice ? (
          <Notice title="Please confirm before your visit" icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}>
            <Typography variant="body2">{services.notice}</Typography>
          </Notice>
        ) : null}

        <Box component="section" aria-labelledby="service-categories-heading">
          <SectionHeader
            id="service-categories-heading"
            title="Browse by category"
            description={`${services.services.length} services across ${services.categories.length} categories.`}
            icon={<TocIcon />}
          />
          <CardGrid>
            {services.categories.map((category) => {
              const items = services.services.filter((service) => service.category === category.id);
              const samples = items.slice(0, 3).map((service) => service.name);
              return (
                <Card key={category.id} variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
                  <CardActionArea
                    href={`${base}services/${category.id}/`}
                    sx={{
                      p: 2.5,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 1,
                        mb: 1.5,
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        color: 'primary.dark',
                      }}
                    >
                      <ServiceCategoryIcon id={category.id} />
                    </Box>
                    <Typography component="h3" variant="h3">
                      {category.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.25 }}>
                      {items.length} {items.length === 1 ? 'service' : 'services'}
                    </Typography>
                    {category.description ? (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {category.description}
                      </Typography>
                    ) : null}
                    {samples.length > 0 ? (
                      <Box component="ul" sx={{ pl: 2.25, mt: 1.25, mb: 0, fontSize: '0.875rem', color: 'text.secondary' }}>
                        {samples.map((name) => (
                          <Box component="li" key={name} sx={{ mb: 0.25 }}>
                            {name}
                          </Box>
                        ))}
                        {items.length > samples.length ? (
                          <Box component="li" sx={{ listStyle: 'none', ml: -2.25, fontStyle: 'italic' }}>
                            + {items.length - samples.length} more
                          </Box>
                        ) : null}
                      </Box>
                    ) : null}
                    <Typography
                      component="span"
                      sx={{
                        mt: 'auto',
                        pt: 1.5,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: 'primary.dark',
                        fontWeight: 700,
                      }}
                    >
                      View services
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Typography>
                  </CardActionArea>
                </Card>
              );
            })}
          </CardGrid>
        </Box>

        <ContactCard site={site} />
      </PageContainer>
    </AppThemeProvider>
  );
}
