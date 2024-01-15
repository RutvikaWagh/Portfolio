/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Footer
 */
import { FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				
					
						<h4>
							<FaPhone size={20} style={{ color: 'black', marginRight: '1rem' }} />
							+91 8010628799
						</h4>
				
					
						<h4>
							<FaMailBulk size={20} style={{ color: 'black', marginRight: '1rem' }} />
							rutvika.wagh@gmail.com
						</h4>
				
					
						<h4>Copyright © 2023 | Rutvika Wagh</h4>
					
				</div>
				
				
			</div>
		
	);
};

export default Footer;
