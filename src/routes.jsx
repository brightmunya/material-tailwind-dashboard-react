import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserPlusIcon,
  UsersIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { Home } from "./pages/dashboard";
import { SignIn, SignUp } from "./pages/auth";
import {ZakaahReport, PEPFARReport} from "./pages/reports";
import {BeneficiariesList, NewApplicant, BeneficiaryProfile, Applications} from "./pages/beneficiaries";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
        showInSidenav: true,
      }
      
    ],
  },
  {
    title: "beneficiaries",
    layout: "dashboard",
    pages: [
      {
        icon: <UsersIcon {...icon} />,
        name: "beneficiaries",
        path: "/beneficiaries/list",
        element: <BeneficiariesList />,
        showInSidenav: true,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "applications",
        path: "/beneficiaries/applications",
        element: <Applications />,
        showInSidenav: true,
      },
      {
          icon: <UserPlusIcon {...icon} />,
          name: "new applicant",
          path: "/beneficiaries/new-applicant",
          element: <NewApplicant />,
          showInSidenav: true,

      }
      ,
      {
          icon: <UserCircleIcon {...icon} />,
          name: "beneficiary profile",
          path: "/beneficiaries/beneficiary-profile",
          element: <BeneficiaryProfile />,
          showInSidenav: false,
      }
    ],
  },
  {
    title: "reports",
    layout: "reports",
    pages: [
      {
        icon: <DocumentChartBarIcon {...icon} />,
        name: "zakaah",
        path: "/reports/zakaah",
        element: <ZakaahReport />,
        showInSidenav: true,
      },
      {
        icon: <ClipboardDocumentCheckIcon {...icon} />,
        name: "pepfar",
        path: "/reports/pepfar",
        element: <PEPFARReport />,
        showInSidenav: true,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
        showInSidenav: true,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
        showInSidenav: false,
      },
    ],
  },
];

export default routes;
