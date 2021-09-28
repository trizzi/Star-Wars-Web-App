import Display from './components/Display';
import Header from './components/Header';

import { useState } from 'react';

function App() {
	const [showMovie, setShowMovie] = useState(true);

	return (
		<div className='container'>
			<Header onDisplay={() => setShowMovie(!showMovie)} />
			{showMovie && <Display />}
		</div>
	);
}

export default App;
