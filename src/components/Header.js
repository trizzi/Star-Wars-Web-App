import Movies from './Movies';
import Button from './Button';

import { useState } from 'react';

const Header = ({ onDisplay }) => {
	const [leg, setLeg] = useState(false);
	return (
		<div className='dropdown'>
			<Button
				onClick={onDisplay}
				onBla={() => setLeg(!leg)}
			/>
			<ul className='dropdown-contents '>
				{leg && <Movies />}
			</ul>
		</div>
	);
};

export default Header;
