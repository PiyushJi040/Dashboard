import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

// Mock data for sales overview
const overviewData = [
  {
    title: 'Total Revenue',
    value: '$125,430',
    change: '+12.5%',
    changeType: 'positive',
  },
  {
    title: 'Monthly Growth',
    value: '23.4%',
    change: '+5.2%',
    changeType: 'positive',
  },
  {
    title: 'Average Order Value',
    value: '$87.50',
    change: '-2.1%',
    changeType: 'negative',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '+0.8%',
    changeType: 'positive',
  },
];

// Mock data for sales trend
const salesTrendData = [
  {
    id: 'sales',
    color: 'hsl(220, 70%, 50%)',
    data: [
      { x: 'Jan', y: 12000 },
      { x: 'Feb', y: 15000 },
      { x: 'Mar', y: 18000 },
      { x: 'Apr', y: 22000 },
      { x: 'May', y: 25000 },
      { x: 'Jun', y: 28000 },
      { x: 'Jul', y: 32000 },
      { x: 'Aug', y: 35000 },
      { x: 'Sep', y: 38000 },
      { x: 'Oct', y: 42000 },
      { x: 'Nov', y: 45000 },
      { x: 'Dec', y: 48000 },
    ],
  },
];

// Mock data for sales by category
const categoryData = [
  { category: 'Electronics', sales: 45000 },
  { category: 'Clothing', sales: 32000 },
  { category: 'Home & Garden', sales: 28000 },
  { category: 'Sports', sales: 25000 },
  { category: 'Books', sales: 18000 },
  { category: 'Beauty', sales: 15000 },
];

// Mock data for sales channels
const channelData = [
  { id: 'Online Store', value: 60, color: '#8884d8' },
  { id: 'Mobile App', value: 25, color: '#82ca9d' },
  { id: 'Retail Stores', value: 15, color: '#ffc658' },
];

const Sales = () => {
  const theme = useTheme();

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Sales Overview
      </Typography>

      {/* Overview Cards */}
      <Grid container spacing={3} mb={3}>
        {overviewData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" component="div" mb={1}>
                  {item.value}
                </Typography>
                <Typography
                  variant="body2"
                  color={item.changeType === 'positive' ? 'success.main' : 'error.main'}
                >
                  {item.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Sales Trend (Yearly)
              </Typography>
              <Box height={400}>
                <ResponsiveLine
                  data={salesTrendData}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                  }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Sales ($)',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: theme.palette.text.primary,
                        },
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Sales by Channel
              </Typography>
              <Box height={300}>
                <ResponsivePie
                  data={channelData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'nivo' }}
                  theme={{
                    labels: {
                      text: {
                        fill: theme.palette.text.primary,
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Sales by Category
              </Typography>
              <Box height={300}>
                <ResponsiveBar
                  data={categoryData}
                  keys={['sales']}
                  indexBy="category"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Category',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Sales ($)',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: theme.palette.text.primary,
                        },
                      },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sales;
