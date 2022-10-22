import { site_icon, navLinks, social_icons } from "./data";
import { Layout } from "./components";
import { Home, NoMatch } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
	  <>
	  <Routes>
		 <Route path="/" element={<Layout
			   links={navLinks}
			   icons={social_icons}
			   site_icon={site_icon}
		 />}>
	        <Route index element={<Home />} />
			<Route path="*" element={<NoMatch />} />
	     </Route>
	  </Routes>
	  </>
  );
}

export default App;
