import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CampaignIcon from '@mui/icons-material/Campaign';
import MapIcon from '@mui/icons-material/Map';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AppThemeProvider from '../AppThemeProvider';
import DoctorScheduleTable from '../../DoctorScheduleTable';
import EmptyState from '../EmptyState';
import EntryCard from '../EntryCard';
import HeroCarousel from '../HeroCarousel';
import ScheduleTable from '../ScheduleTable';
import SectionHeader from '../SectionHeader';
import type { AnnouncementEntry, DoctorsData, ServicesData } from '../../../data/types';
import type { ScheduleRow, SiteInfo } from '../types';

interface Props {
  site: SiteInfo;
  heroImages: string[];
  latestAnnouncement: AnnouncementEntry | null;
  hours: ScheduleRow[];
  doctors: DoctorsData;
  services: ServicesData;
  schedulesLastUpdated: string | null;
  announcementsLastUpdated: string | null;
  layoutPlaceholder: string;
  base: string;
}

export default function HomeView({
  site,
  heroImages,
  latestAnnouncement,
  hours,
  doctors,
  services,
  schedulesLastUpdated,
  announcementsLastUpdated,
  layoutPlaceholder,
  base,
}: Props) {
  const announcementsHref = `${base}announcements/`;
  const directoryHref = `${base}directory/`;
  const servicesHref = `${base}services/`;

  return (
    <AppThemeProvider>
      <Box
        component="section"
        aria-labelledby="hero-heading"
        sx={{
          position: 'relative',
          bgcolor: '#f6faf6',
          borderBottom: '1px solid',
          borderColor: 'divider',
          pt: { xs: '19rem', md: 'clamp(13rem, 30vw, 24rem)' },
        }}
      >
        <HeroCarousel images={heroImages} />
        <Box
          sx={{
            position: 'relative',
            zIndex: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'flex-end' },
            justifyContent: 'space-between',
            gap: { xs: 1, md: 3 },
            width: 'min(100% - 2rem, 68rem)',
            mx: 'auto',
            mb: { xs: '-10rem', md: '-8rem' },
            p: 'clamp(1.25rem, 3vw, 2rem)',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: '0 18px 40px -28px rgba(38, 50, 56, 0.45)',
          }}
        >
          <Box sx={{ maxWidth: '42rem' }}>
            <Typography component="p" variant="overline" color="primary.dark" sx={{ m: 0, mb: 0.5 }}>
              Introduction
            </Typography>
            <Typography component="h1" variant="h1" id="hero-heading" sx={{ mb: 0.5 }}>
              {site.shortName}
              <Box
                component="span"
                sx={{ display: 'block', color: 'primary.dark', fontSize: '0.52em', fontWeight: 600, letterSpacing: '0.02em' }}
              >
                {site.unit}
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.0625rem' }}>
              {site.description}
            </Typography>
          </Box>
          <Button
            href={announcementsHref}
            variant="outlined"
            startIcon={<CampaignIcon />}
            sx={{
              mt: 1,
              flexShrink: 0,
              bgcolor: 'background.paper',
              borderColor: 'divider',
              color: 'text.primary',
              '&:hover': { bgcolor: 'primary.light', borderColor: 'divider', color: 'text.primary' },
            }}
          >
            Latest advisory
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 },
          width: 'min(100% - 2rem, 68rem)',
          mx: 'auto',
          mt: { xs: '12rem', md: '10.5rem' },
        }}
      >
        <Box
          component="section"
          aria-label="Key information"
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))', gap: 2 }}
        >
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardActionArea href={announcementsHref} sx={{ p: 2.5, display: 'block' }}>
              <Typography
                component="span"
                variant="overline"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 700 }}
              >
                <CampaignIcon sx={{ fontSize: 14 }} /> Latest announcement
              </Typography>
              <Typography component="span" sx={{ display: 'block', fontWeight: 600, mt: 0.5 }}>
                {latestAnnouncement?.title ?? 'No announcements yet'}
              </Typography>
              <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                {latestAnnouncement ? `Published ${latestAnnouncement.published}` : 'Pending verification'}
              </Typography>
            </CardActionArea>
          </Card>

          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardActionArea href={directoryHref} sx={{ p: 2.5, display: 'block' }}>
              <Typography
                component="span"
                variant="overline"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 700 }}
              >
                <MapIcon sx={{ fontSize: 14 }} /> Building layout
              </Typography>
              <Typography component="span" sx={{ display: 'block', fontWeight: 600, mt: 0.5 }}>
                Directory coming soon
              </Typography>
              <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                Placeholder shown below
              </Typography>
            </CardActionArea>
          </Card>

          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardActionArea href={servicesHref} sx={{ p: 2.5, display: 'block' }}>
              <Typography
                component="span"
                variant="overline"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 700 }}
              >
                <MedicalServicesIcon sx={{ fontSize: 14 }} /> Health services
              </Typography>
              <Typography component="span" sx={{ display: 'block', fontWeight: 600, mt: 0.5 }}>
                {services.services.length} services in {services.categories.length} categories
              </Typography>
              <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                Browse certificates, permits, clinical care, and more
              </Typography>
            </CardActionArea>
          </Card>
        </Box>

        <Box component="section" aria-labelledby="home-hours-heading">
          <SectionHeader
            id="home-hours-heading"
            title="Operating hours"
            description="Regular office days."
            updated={schedulesLastUpdated}
            icon={<ScheduleIcon />}
          />
          {hours.length > 0 ? (
            <ScheduleTable rows={hours} />
          ) : (
            <EmptyState
              title="No verified hours published yet"
              message="Regular operating hours will appear here after they are confirmed."
            />
          )}
        </Box>

        <Box component="section" aria-labelledby="doctor-schedule-heading">
          <SectionHeader
            id="doctor-schedule-heading"
            title="Schedule of doctors"
            description="OPD days by doctor. Consultation hours are not specified in the source schedule."
            updated={doctors.lastUpdated}
            icon={<MedicalServicesIcon />}
          />
          <DoctorScheduleTable data={doctors} />
        </Box>

        <Box component="section" aria-labelledby="home-updates-heading">
          <SectionHeader
            id="home-updates-heading"
            title="Latest announcement"
            description="Advisories and temporary changes."
            updated={announcementsLastUpdated}
            icon={<CampaignIcon />}
          />
          {latestAnnouncement ? (
            <EntryCard
              title={latestAnnouncement.title}
              badge={latestAnnouncement.category}
              meta={[
                { label: 'Published', value: latestAnnouncement.published },
                ...(latestAnnouncement.until ? [{ label: 'Until', value: latestAnnouncement.until }] : []),
              ]}
              details={[latestAnnouncement.body, ...(latestAnnouncement.notes ?? [])]}
              source={latestAnnouncement.source}
              updated={latestAnnouncement.updated}
            />
          ) : (
            <EmptyState
              title="No announcements published yet"
              message="Verified advisories and temporary changes will appear here once available."
            />
          )}
        </Box>

        <Box
          component="section"
          aria-labelledby="layout-preview-heading"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' }, gap: 3, alignItems: 'center' }}
        >
          <Box>
            <Typography component="h2" variant="h2" id="layout-preview-heading" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.dark' }}>
              <PlaceOutlinedIcon /> Finding your way
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.0625rem', mt: 1 }}>
              A verified room-by-room layout is being prepared. The placeholder below is not the final directory.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <Button href={directoryHref} sx={{ color: 'primary.dark' }}>
                Open the directory
              </Button>
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
      </Box>
    </AppThemeProvider>
  );
}
