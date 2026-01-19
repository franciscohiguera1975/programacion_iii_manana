import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography, Button } from '@mui/material';

// Imágenes públicas de ejemplo (puedes reemplazarlas)
const images = [
  {
    url: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&auto=format&fit=crop",
    title: "Montañas",
    description: "Paisaje natural"
  },
  {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w-800&auto=format&fit=crop",
    title: "Ciudad",
    description: "Vista urbana"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    title: "Playa",
    description: "Arena y mar"
  }
];

export default function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Carousel
        animation="slide"
        duration={500}
        navButtonsAlwaysVisible
        indicators={true}
        sx={{ borderRadius: 2 }}
      >
        {images.map((item, i) => (
          <Paper key={i} elevation={3}>
            <Box
              component="img"
              src={item.url}
              alt={item.title}
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 1
              }}
            />
            <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
              <Typography variant="h5" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {item.description}
              </Typography>
              <Button variant="contained" color="primary">
                Ver más
              </Button>
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}