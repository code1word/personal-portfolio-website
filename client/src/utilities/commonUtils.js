import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Projects from "../PortfolioContainer/Projects/Projects";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About",
    component: AboutMe,
  },
  {
    screen_name: "Details",
    component: Resume,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "Contact",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
