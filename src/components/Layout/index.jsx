import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';

const Layout = ({ links, icons, site_icon }) => {
    return (
	   	<>
			<Header links={links} icon={site_icon} />
	   		<main>
			   <Outlet />
	   		</main>
			<Footer icons={icons} />
	    </>
	);
};

export default Layout;
