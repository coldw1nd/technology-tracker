import React from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, Button, Chip, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';

function TechnologyDetail({ technologies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tech = technologies.find(t => t.id === parseInt(id));

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Изучено';
      case 'in-progress': return 'В процессе';
      default: return 'Не начато';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      default: return 'default';
    }
  };

  if (!tech) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5">Технология не найдена</Typography>
        <Button component={RouterLink} to="/" sx={{ mt: 2 }}>На главную</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)} 
        sx={{ mb: 2 }}
      >
        Назад
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            {tech.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
             <Chip label={tech.category} variant="outlined" />
             <Chip 
               label={getStatusText(tech.status)} 
               color={getStatusColor(tech.status)} 
             />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ 
          whiteSpace: 'pre-wrap', 
          lineHeight: 1.8, 
          fontSize: '1.1rem',
          wordBreak: 'break-word' 
        }}>
          {tech.description}
        </Typography>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
           <Button variant="contained" startIcon={<EditIcon />} component={RouterLink} to={`/edit/${tech.id}`}>
             Редактировать
           </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default TechnologyDetail;