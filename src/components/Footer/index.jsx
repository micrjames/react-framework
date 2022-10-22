import './index.scss';

const Footer = ({ icons }) => {
	return (
		<footer>
	   		<div className="footer-content">
	   			<div className="footer-content__social-icon">
				   {icons.map(icon => (
					  <a
                          key ={icon.id}
                          href={icon.link}
                          target="_blank"
                          rel="noreferrer"
                          className="footer-content__social-icon__link"
                       >    
                           {icon.icon}
                       </a>
                    ))}
	   			</div>
	   			<div className="footer-content__signature">
					 &copy;mrjDevs 2021
	   			</div>
			</div>
		</footer>
	);
};

export default Footer;
