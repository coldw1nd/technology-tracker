import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

function ProgressBar({ value, label }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        {label && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {label}
          </Typography>
        )}
        <LinearProgress variant="determinate" value={value} sx={{ height: 10, borderRadius: 5 }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default ProgressBar;