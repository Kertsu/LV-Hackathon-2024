// src/frontend/src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import Profile from './pages/student/profile';
import { ThemeProvider } from "@/components/theme-provider";
import AuthPage from './auth';
import StudentPage from './pages/student';
import ProviderPage from './pages/provider';
import ScholarshipFeed from './pages/feeds/AllScholarshipPostsfeed';
import ProvidersFeed from './pages/feeds/AllProvidersFeed';
import ProviderProfile from './pages/provider/ProviderProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
return (  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path='/provider' element={<ProviderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='/scholarship-feed' element={<ScholarshipFeed/>}/>
          <Route path='/provider-feed' element={<ProvidersFeed/>} />
          <Route path="/provider-profile/:id" element={<ProviderProfile />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

        </Routes> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
