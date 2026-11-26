import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DescriptionIcon from '@mui/icons-material/Description';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import type { SvgIconProps } from '@mui/material/SvgIcon';

interface Props extends SvgIconProps {
  id: string;
}

export default function ServiceCategoryIcon({ id, ...iconProps }: Props) {
  switch (id) {
    case 'clinical_services':
      return <MedicalServicesIcon {...iconProps} />;
    case 'certificates_and_clearances':
      return <DescriptionIcon {...iconProps} />;
    case 'permits_and_clearances':
      return <FactCheckIcon {...iconProps} />;
    case 'environmental_health':
      return <CleaningServicesIcon {...iconProps} />;
    case 'laboratory_and_water_testing':
      return <ScienceIcon {...iconProps} />;
    case 'public_health_programs':
      return <HealthAndSafetyIcon {...iconProps} />;
    case 'rehabilitation_services':
      return <AccessibilityIcon {...iconProps} />;
    default:
      return <AssignmentIcon {...iconProps} />;
  }
}
