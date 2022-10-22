import Nav from '../Nav';
import SiteIcon from '../Icon/SiteIcon';
import './index.scss';

const Header = ({ links, icon }) => {
   	return (
		<header>
			<SiteIcon icon={icon} link />
			<Nav links={links} />
		</header>
   	);
};

export default Header;
