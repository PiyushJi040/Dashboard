import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Chip,
  useTheme,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Search,
  Add,
  Edit,
  Delete,
} from '@mui/icons-material';

const productsData = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    category: 'Electronics',
    stock: 50,
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: '$129.99',
    category: 'Sports',
    stock: 30,
    status: 'In Stock',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    price: '$79.99',
    category: 'Appliances',
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: '$199.99',
    category: 'Electronics',
    stock: 20,
    status: 'In Stock',
  },
  {
    id: 5,
    name: 'Yoga Mat',
    price: '$39.99',
    category: 'Sports',
    stock: 15,
    status: 'In Stock',
  },
  {
    id: 6,
    name: 'Blender',
    price: '$59.99',
    category: 'Appliances',
    stock: 10,
    status: 'In Stock',
  },
];

const Products = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const categories = ['All', 'Electronics', 'Sports', 'Appliances'];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 3 }} fontWeight={600}>
          Products
        </Typography>
      </Fade>

      <Fade in={loaded} timeout={1000}>
        <Box display="flex" gap={2} mb={{ xs: 2, md: 3 }} flexWrap="wrap" alignItems="center">
          <TextField
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: { xs: '100%', sm: 250 }, flex: { sm: 1, md: 0 } }}
          />
          <Box display="flex" gap={1} flexWrap="wrap">
            {categories.map(category => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
          <Button variant="contained" startIcon={<Add />} sx={{ ml: 'auto' }}>
            Add Product
          </Button>
        </Box>
      </Fade>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Zoom in={loaded} timeout={1000 + index * 100}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h6" component="div" fontWeight={600}>
                      {product.name}
                    </Typography>
                    <Chip
                      label={product.status}
                      color={product.status === 'In Stock' ? 'success' : 'error'}
                      size="small"
                    />
                  </Box>
                  <Typography variant="h5" color="primary" mb={1} fontWeight={700}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Category: {product.category}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    Stock: <strong>{product.stock}</strong> units
                  </Typography>
                  <Box display="flex" gap={1} mt="auto">
                    <Button size="small" variant="outlined" startIcon={<Edit />} fullWidth>
                      Edit
                    </Button>
                    <Button size="small" variant="outlined" startIcon={<Delete />} color="error" fullWidth>
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>

      {filteredProducts.length === 0 && (
        <Fade in={true} timeout={1000}>
          <Box textAlign="center" mt={5}>
            <Typography variant="h6" color="text.secondary">
              No products found matching your criteria.
            </Typography>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Products;
