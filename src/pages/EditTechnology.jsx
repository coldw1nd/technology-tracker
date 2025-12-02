import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, MenuItem } from '@mui/material';

function EditTechnology({ technologies, onEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    const techToEdit = technologies.find(t => t.id === parseInt(id));
    if (techToEdit) {
      setFormData({
        title: techToEdit.title,
        description: techToEdit.description,
        category: techToEdit.category
      });
    } else {
      navigate('/');
    }
  }, [id, technologies, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(parseInt(id), formData);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Редактировать технологию
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Название"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Категория"
          name="category"
          select
          value={formData.category}
          onChange={handleChange}
        >
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
        </TextField>
        <TextField
          label="Описание"
          name="description"
          multiline
          rows={6}
          value={formData.description}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" size="large" fullWidth>
            Сохранить изменения
            </Button>
            <Button variant="outlined" size="large" color="error" onClick={() => navigate('/')}>
            Отмена
            </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default EditTechnology;