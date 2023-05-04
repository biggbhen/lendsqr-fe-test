import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Users from './pages/users/Users';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/dashboard' element={<Layout />}>
				<Route index element={<Users />} />
			</Route>
		</Routes>
	);
}

export default App;
