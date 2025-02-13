import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LayOut from './layout/LayOut';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';

function App() {
 

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/skills/" element={<SkillPage />} />
          <Route path="/projects/" element={<ProjectPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          {/* <Route path="/flat-list/" element={<FlatListPage />} />
          <Route path="/flat-details/" element={<FlatDetailsPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contact/" element={<ContactPage />} /> */}
        </Route>
      </Routes>
      

    </BrowserRouter>
    </>
  )
}

export default App
