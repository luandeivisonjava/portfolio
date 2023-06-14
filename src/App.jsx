import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './style/components/app.sass';

function App() {

  return (
    <div id="portfolio">
      <h1>Luan Deivson</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
