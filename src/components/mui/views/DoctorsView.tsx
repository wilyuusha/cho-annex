import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleIcon from '@mui/icons-material/People';
import AppThemeProvider from '../AppThemeProvider';
import CardGrid from '../CardGrid';
import ContactCard from '../ContactCard';
import Notice from '../Notice';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import type { DoctorsData } from '../../../data/types';
import type { SiteInfo } from '../types';

interface Props {
  doctors: DoctorsData;
  site: SiteInfo;
  placeholderImage: string;
}

export default function DoctorsView({ doctors, site, placeholderImage }: Props) {
  return (
    <AppThemeProvider>
      <PageContainer>
        <PageHeader
          eyebrow="Our people"
          title="Doctors"
          lead="A list of the doctors assigned to the City Health Office Annex. Only names are published here; other details are withheld pending permission."
          updated={doctors.lastUpdated}
        />

        <Notice title="Photos and details pending permission" icon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}>
          <Typography variant="body2">
            The images below are placeholders. Doctor photos and professional details are not published yet; confirm
            current assignments with the office.
          </Typography>
        </Notice>

        <Box component="section" aria-labelledby="doctors-heading">
          <SectionHeader
            id="doctors-heading"
            title="Doctors at the Annex"
            description={`${doctors.doctors.length} names listed.`}
            icon={<PeopleIcon />}
          />
          <CardGrid>
            {doctors.doctors.map((doctor) => (
              <Card
                key={doctor.name}
                sx={{ width: '100%', maxWidth: { xs: 'none', sm: 345 }, borderRadius: 2, height: '100%' }}
              >
                <CardActionArea
                  component="div"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={placeholderImage}
                    alt="Photo placeholder"
                    sx={{ objectFit: 'cover', bgcolor: 'primary.light' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'primary.dark', fontSize: '1.125rem' }}>
                      {doctor.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Photo pending permission. Full details are not published yet.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </CardGrid>
        </Box>

        <ContactCard site={site} title="Need to reach a doctor?" />
      </PageContainer>
    </AppThemeProvider>
  );
}
