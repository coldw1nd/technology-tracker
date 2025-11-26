import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Chip, Box } from '@mui/material';

function TechnologyCard({ technology, onStatusChange, onDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      default: return 'default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Изучено';
      case 'in-progress': return 'В процессе';
      default: return 'Не начато';
    }
  };

  return (
    <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Chip label={technology.category} size="small" variant="outlined" />
          <Chip 
            label={getStatusText(technology.status)} 
            color={getStatusColor(technology.status)} 
            size="small" 
          />
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {technology.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {technology.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onStatusChange(technology.id)}>
          Сменить статус
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(technology.id)}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}

export default TechnologyCard;