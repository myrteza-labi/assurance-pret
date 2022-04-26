import IconGarantie from '@mui/icons-material/CheckCircleOutline';
import IconEuro from '@mui/icons-material/Euro';
import IconComparaison from '@mui/icons-material/CompareArrows';
import IconNegociation from '@mui/icons-material/HeadsetMic';
import IconPret from '@mui/icons-material/AddBusiness';
import IconContact from '@mui/icons-material/ContactSupport';

const routes = [
  {
    name: "Garantie",
    icon: <IconGarantie />,
    href: "", 
  },
  {
    name: "Coût",
    icon: <IconEuro />,
    href: "",
  },
  {
    name: "Comparatif",
    icon: <IconComparaison />,
    href: "",
  },
  {
    name: "Négociation",
    icon: <IconNegociation />,
    href: "",
  },
  {
    name: "Prêt",
    icon: <IconPret />,
    href: "", 
  },
  {
    name: "Contact",
    icon: <IconContact />,
    href: "", 
  },
];

export default routes;
