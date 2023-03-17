import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';
import NavBar from './pages/Navbar/navbar';
import Home from './pages/HomePage/home';
import Events from './pages/EventsPage/events';
import Footer from './pages/Footer/footer';
import Sponsors from './pages/SponsorsPage/sponsors';
import Schedule from './pages/SchedulePage/schedule';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
		<>
			{!loading ? (
				<Loader />
			) : (
				<div className="App">
					<NavBar />
					<Home />
					<Events />
					<Sponsors />
					<Schedule />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
