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
  Avatar,
  useTheme,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Search,
  Email,
  Phone,
  LocationOn,
  Add,
  Edit,
  Delete,
} from '@mui/icons-material';

const customersData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    status: 'Active',
    totalOrders: 15,
    totalSpent: '$1,234.56',
    avatar: 'JD',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    location: 'Los Angeles, CA',
    status: 'Active',
    totalOrders: 8,
    totalSpent: '$987.43',
    avatar: 'JS',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 345-6789',
    location: 'Chicago, IL',
    status: 'Inactive',
    totalOrders: 3,
    totalSpent: '$234.12',
    avatar: 'BJ',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+1 (555) 456-7890',
    location: 'Houston, TX',
    status: 'Active',
    totalOrders: 22,
    totalSpent: '$2,345.67',
    avatar: 'AB',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    phone: '+1 (555) 567-8901',
    location: 'Phoenix, AZ',
    status: 'Active',
    totalOrders: 12,
    totalSpent: '$1,567.89',
    avatar: 'CW',
  },
  {
    id: 6,
    name: 'Diana Davis',
    email: 'diana.davis@example.com',
    phone: '+1 (555) 678-9012',
    location: 'Philadelphia, PA',
    status: 'Active',
    totalOrders: 7,
    totalSpent: '$876.54',
    avatar: 'DD',
  },
];

const Customers = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const statuses = ['All', 'Active', 'Inactive'];

  const filteredCustomers = customersData.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || customer.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 3 }} fontWeight={600}>
          Customers
        </Typography>
      </Fade>

      <Fade in={loaded} timeout={1000}>
        <Box display="flex" gap={2} mb={{ xs: 2, md: 3 }} flexWrap="wrap" alignItems="center">
          <TextField
            placeholder="Search customers..."
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
            {statuses.map(status => (
              <Chip
                key={status}
                label={status}
                onClick={() => setSelectedStatus(status)}
                color={selectedStatus === status ? 'primary' : 'default'}
                variant={selectedStatus === status ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
          <Button variant="contained" startIcon={<Add />} sx={{ ml: 'auto' }}>
            Add Customer
          </Button>
        </Box>
      </Fade>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filteredCustomers.map((customer, index) => (
          <Grid item xs={12} sm={6} lg={4} key={customer.id}>
            <Zoom in={loaded} timeout={1000 + index * 100}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2} gap={2}>
                    <Avatar sx={{ width: { xs: 48, md: 56 }, height: { xs: 48, md: 56 }, bgcolor: 'primary.main', fontSize: { xs: 18, md: 20 } }}>
                      {customer.avatar}
                    </Avatar>
                    <Box flex={1}>
                      <Typography variant="h6" component="div" fontWeight={600}>
                        {customer.name}
                      </Typography>
                      <Chip
                        label={customer.status}
                        color={customer.status === 'Active' ? 'success' : 'default'}
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <Box display="flex" alignItems="center" mb={1} gap={1}>
                      <Email sx={{ fontSize: 18, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
                        {customer.email}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1} gap={1}>
                      <Phone sx={{ fontSize: 18, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {customer.phone}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2} gap={1}>
                      <LocationOn sx={{ fontSize: 18, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {customer.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={2} gap={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Total Orders
                      </Typography>
                      <Typography variant="h6" fontWeight={600}>
                        {customer.totalOrders}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Total Spent
                      </Typography>
                      <Typography variant="h6" color="primary" fontWeight={600}>
                        {customer.totalSpent}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" gap={1}>
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

      {filteredCustomers.length === 0 && (
        <Fade in={true} timeout={1000}>
          <Box textAlign="center" mt={5}>
            <Typography variant="h6" color="text.secondary">
              No customers found matching your criteria.
            </Typography>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Customers;
