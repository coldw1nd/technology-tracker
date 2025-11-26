const INITIAL_DATA = [
  { id: 1, title: 'HTML', description: 'Основы разметки', category: 'Frontend', status: 'completed' },
  { id: 2, title: 'CSS', description: 'Стилизация и сетки', category: 'Frontend', status: 'completed' },
  { id: 3, title: 'JavaScript', description: 'Основы языка и ES6+', category: 'Frontend', status: 'in-progress' },
  { id: 4, title: 'React', description: 'Хуки, компоненты, роутинг', category: 'Frontend', status: 'in-progress' },
];

export const fetchTechnologies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const stored = localStorage.getItem('technologies');
      if (stored) {
        resolve(JSON.parse(stored));
      } else {
        resolve(INITIAL_DATA);
      }
    }, 800);
  });
};