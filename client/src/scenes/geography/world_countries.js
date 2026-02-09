// Simplified world countries GeoJSON for demo purposes
// In a real application, you'd use a proper GeoJSON file
export const geoFeatures = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'United States' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-130, 50], [-60, 50], [-60, 20], [-130, 20], [-130, 50]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'United Kingdom' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-10, 60], [5, 60], [5, 50], [-10, 50], [-10, 60]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Germany' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[5, 55], [15, 55], [15, 45], [5, 45], [5, 55]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'France' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-5, 51], [10, 51], [10, 41], [-5, 41], [-5, 51]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Canada' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[-140, 70], [-50, 70], [-50, 40], [-140, 40], [-140, 70]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Australia' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[110, -10], [155, -10], [155, -45], [110, -45], [110, -10]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Japan' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[130, 45], [150, 45], [150, 30], [130, 30], [130, 45]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Netherlands' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[3, 54], [8, 54], [8, 50], [3, 50], [3, 54]]],
      },
    },
  ],
};
