import { FaReact, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const site_icon = {
    which: <FaReact /> ,
    style: "site-icon",
    path: "/"
};
const navLinks = [
   {id: 1, path: '/', text: 'Home'},
   {id: 2, path: '/about', text: 'About Me'},
   {id: 3, path: '/projects', text: 'My Projects'}
];
const social_icons = [
	{id: 1, link: "https://github.com/micrjames", icon: <FaGithub />},
	{id: 2, link: "https://michaelrjames.hashnode.dev", icon: <SiHashnode />},
	{id: 3, link: "https://www.linkedin.com/in/michael-james-aa5b64233/", icon: <FaLinkedinIn />}
];

export { site_icon, navLinks, social_icons };
