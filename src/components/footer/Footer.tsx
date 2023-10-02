/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Footer
 */
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='phone'>
						<h4>
							<FaPhone size={20} style={{ color: '#fff', marginRight: '1rem' }} />
							+91 8010628799
						</h4>
					</div>

					<div className='email'>
						<h4>
							<FaMailBulk size={20} style={{ color: '#fff', marginRight: '1rem' }} />
							rutvika.wagh@gmail.com
						</h4>
					</div>
					<div className='Copyright'>
						<h4>Copyright © 2023 | Rutvika Wagh</h4>
					</div>
				</div>
				<div className='right'>
					<div className='social'>
						<FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
						<FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
						<FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
						<FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
