import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, MenuItem } from '@mui/material';

function AddTechnology({ onAdd }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Frontend'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Заполните все поля!');
      return;
    }
    onAdd(formData);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Добавить новую технологию
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Название"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
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
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" size="large">
          Сохранить
        </Button>
      </Box>
    </Container>
  );
}

export default AddTechnology;