// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Assurance Prêts",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "Menu",
      items: [
        { name: "Accueil", href: "#" },
        { name: "Garantie", href: "#" },
        { name: "Coût", href: "#" },
        { name: "Comparatif", href: "#" },
        { name: "Négociation", href: "#" },
        { name: "Prêt", href: "#" },

      ],
    },

    {
      name: "Aide et support",
      items: [
        { name: "Nous contacter", href: "#" },

      ],
    },
    {
      name: "legal",
      items: [
        { name: "Mentions légales", href: "#" },
        { name: "politique de confidentialité", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Touts droits réservé. Copyright &copy; {date} Assurance Prêts | As Du Grand Lyon |  {" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Développeur: LABI Myrteza
      </MKTypography>
      .
    </MKTypography>
  ),
};
