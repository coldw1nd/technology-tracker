import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import ProgressBar from '../components/ProgressBar';

function Statistics({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(t => t.status === 'completed').length;
  const inProgress = technologies.filter(t => t.status === 'in-progress').length;
  
  const progressPercent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Статистика обучения
        </Typography>
        
        <Box sx={{ mb: 4, mt: 2 }}>
          {}
          <ProgressBar value={progressPercent} label="Общий прогресс" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <Box>
            <Typography variant="h3" color="primary">{total}</Typography>
            <Typography variant="caption">Всего</Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="success.main">{completed}</Typography>
            <Typography variant="caption">Изучено</Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="warning.main">{inProgress}</Typography>
            <Typography variant="caption">В процессе</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Statistics;