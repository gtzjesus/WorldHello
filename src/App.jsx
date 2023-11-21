import Landing from './pages/landing/Landing';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import Navigation from './ui/navigation/Navigation';
function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Landing />
    </>
  );
}

export default App;
