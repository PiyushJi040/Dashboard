import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  Search,
  Download,
} from '@mui/icons-material';

const transactionsData = [
  {
    id: 1,
    orderId: '#ORD-001',
    customer: 'John Doe',
    amount: '$99.99',
    status: 'Completed',
    date: '2023-10-15',
    paymentMethod: 'Credit Card',
  },
  {
    id: 2,
    orderId: '#ORD-002',
    customer: 'Jane Smith',
    amount: '$129.99',
    status: 'Pending',
    date: '2023-10-14',
    paymentMethod: 'PayPal',
  },
  {
    id: 3,
    orderId: '#ORD-003',
    customer: 'Bob Johnson',
    amount: '$79.99',
    status: 'Completed',
    date: '2023-10-13',
    paymentMethod: 'Credit Card',
  },
  {
    id: 4,
    orderId: '#ORD-004',
    customer: 'Alice Brown',
    amount: '$199.99',
    status: 'Failed',
    date: '2023-10-12',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 5,
    orderId: '#ORD-005',
    customer: 'Charlie Wilson',
    amount: '$39.99',
    status: 'Completed',
    date: '2023-10-11',
    paymentMethod: 'Credit Card',
  },
  {
    id: 6,
    orderId: '#ORD-006',
    customer: 'Diana Davis',
    amount: '$59.99',
    status: 'Completed',
    date: '2023-10-10',
    paymentMethod: 'PayPal',
  },
];

const Transactions = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const statuses = ['All', 'Completed', 'Pending', 'Failed'];

  const filteredTransactions = transactionsData.filter(transaction => {
    const matchesSearch = transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || transaction.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Failed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 3 }} fontWeight={600}>
          Transactions
        </Typography>
      </Fade>

      <Fade in={loaded} timeout={1000}>
        <Box display="flex" gap={2} mb={{ xs: 2, md: 3 }} flexWrap="wrap" alignItems="center">
          <TextField
            placeholder="Search transactions..."
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
          <Button variant="outlined" startIcon={<Download />} sx={{ ml: 'auto' }}>
            Export
          </Button>
        </Box>
      </Fade>

      <Grow in={loaded} timeout={1200}>
        <Card>
          <CardContent sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
            <TableContainer component={Paper} sx={{ maxHeight: { xs: 400, md: 600 }, overflow: 'auto' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 } }}>Order ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 } }}>Customer</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 } }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 } }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 }, display: { xs: 'none', sm: 'table-cell' } }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 }, display: { xs: 'none', md: 'table-cell' } }}>Payment Method</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: 12, md: 14 } }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow 
                      key={transaction.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      <TableCell sx={{ fontSize: { xs: 12, md: 14 } }}>{transaction.orderId}</TableCell>
                      <TableCell sx={{ fontSize: { xs: 12, md: 14 } }}>{transaction.customer}</TableCell>
                      <TableCell sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 600 }}>{transaction.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={transaction.status}
                          color={getStatusColor(transaction.status)}
                          size="small"
                          sx={{ fontSize: { xs: 10, md: 12 } }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontSize: { xs: 12, md: 14 }, display: { xs: 'none', sm: 'table-cell' } }}>{transaction.date}</TableCell>
                      <TableCell sx={{ fontSize: { xs: 12, md: 14 }, display: { xs: 'none', md: 'table-cell' } }}>{transaction.paymentMethod}</TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined" sx={{ fontSize: { xs: 10, md: 12 } }}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grow>

      {filteredTransactions.length === 0 && (
        <Fade in={true} timeout={1000}>
          <Box textAlign="center" mt={5}>
            <Typography variant="h6" color="text.secondary">
              No transactions found matching your criteria.
            </Typography>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Transactions;
