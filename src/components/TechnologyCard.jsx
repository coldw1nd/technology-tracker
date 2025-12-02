import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Chip, Box, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';

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
    <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Chip label={technology.category} size="small" variant="outlined" />
          <Chip 
            label={getStatusText(technology.status)} 
            color={getStatusColor(technology.status)} 
            size="small"
            onClick={() => onStatusChange(technology.id)}
            sx={{ cursor: 'pointer' }}
          />
        </Box>

        <Typography variant="h5" component="div" gutterBottom>
          {technology.title}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {technology.description}
        </Typography>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button size="small" component={RouterLink} to={`/tech/${technology.id}`} startIcon={<VisibilityIcon />}>
          Подробнее
        </Button>

        <Box>
          <Tooltip title="Редактировать">
            <IconButton size="small" component={RouterLink} to={`/edit/${technology.id}`} color="primary">
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Удалить">
            <IconButton size="small" onClick={() => onDelete(technology.id)} color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
}

export default TechnologyCard;