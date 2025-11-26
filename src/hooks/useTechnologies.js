import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { fetchTechnologies } from '../api/mockApi';

export function useTechnologies() {
  const [technologies, setTechnologies] = useLocalStorage('technologies', []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (technologies.length === 0) {
      fetchTechnologies().then(data => {
        setTechnologies(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const addTechnology = (newTech) => {
    const techWithId = { 
      ...newTech, 
      id: Date.now(), 
      status: 'not-started' 
    };
    setTechnologies([...technologies, techWithId]);
  };

  const updateStatus = (id) => {
    setTechnologies(technologies.map(tech => {
      if (tech.id === id) {
        const nextStatus = 
          tech.status === 'not-started' ? 'in-progress' :
          tech.status === 'in-progress' ? 'completed' : 'not-started';
        return { ...tech, status: nextStatus };
      }
      return tech;
    }));
  };

  const deleteTechnology = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту технологию?')) {
      setTechnologies(technologies.filter(t => t.id !== id));
    }
  };

  return {
    technologies,
    loading,
    addTechnology,
    updateStatus,
    deleteTechnology
  };
}