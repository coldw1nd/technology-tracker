import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTechnology from './pages/AddTechnology';
import Statistics from './pages/Statistics';
import { useTechnologies } from './hooks/useTechnologies';

function App() {
  const { technologies, loading, addTechnology, updateStatus, deleteTechnology } = useTechnologies();

  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#2563eb' },
          secondary: { main: '#2c3e50' },
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkMode={mode === 'dark'} />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                technologies={technologies} 
                loading={loading} 
                onStatusChange={updateStatus}
                onDelete={deleteTechnology}
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddTechnology onAdd={addTechnology} />} 
          />
          <Route 
            path="/stats" 
            element={<Statistics technologies={technologies} />} 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;