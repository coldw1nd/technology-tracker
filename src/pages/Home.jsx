import React, { useState } from 'react';
import { Grid, Container, Typography, Box, TextField, CircularProgress } from '@mui/material';
import TechnologyCard from '../components/TechnologyCard';

function Home({ technologies, loading, onStatusChange, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTechnologies = technologies.filter(tech =>
    tech.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Мой прогресс обучения
        </Typography>
        <TextField
          fullWidth
          label="Поиск технологии..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredTechnologies.map((tech) => (
          <Grid item xs={12} sm={6} key={tech.id}>
            <TechnologyCard 
              technology={tech} 
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          </Grid>
        ))}
        {filteredTechnologies.length === 0 && (
          <Typography variant="h6" sx={{ mt: 4, width: '100%', textAlign: 'center', color: 'gray' }}>
            Ничего не найдено
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Home;