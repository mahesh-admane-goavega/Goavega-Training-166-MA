import PeopleIcon from "@mui/icons-material/People";
import StorageIcon from "@mui/icons-material/Storage";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import PublicIcon from "@mui/icons-material/Public";
import TuneIcon from "@mui/icons-material/Tune";
import WbIridescentIcon from "@mui/icons-material/WbIridescent";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication",
    route: "authentication",
  },
  {
    id: 1,
    icon: <StorageIcon />,
    label: "Database",
    route: "database",
  },
  {
    id: 2,
    icon: <CloudDoneIcon />,
    label: "Storage",
    route: "storage",
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "Hosting",
    route: "hosting",
  },
  {
    id: 4,
    icon: <TuneIcon />,
    label: "Functions",
    route: "functions",
  },
  {
    id: 5,
    icon: <WbIridescentIcon />,
    label: "Machine learning",
    route: "machine-learning",
  },
];
