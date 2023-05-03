import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Users from './pages/users/Users';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/users' element={<Users />} />
		</Routes>
	);
}

export default App;
