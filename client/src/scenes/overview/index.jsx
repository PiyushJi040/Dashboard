import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  PointOfSale,
  TrendingUp,
  PersonAdd,
  Traffic,
} from '@mui/icons-material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const overviewStats = [
  {
    title: 'Total Revenue',
    value: '$1,234,567',
    increase: '+14.2%',
    icon: <PointOfSale sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'primary.main',
  },
  {
    title: 'Monthly Sales',
    value: '$89,432',
    increase: '+8.7%',
    icon: <TrendingUp sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'secondary.main',
  },
  {
    title: 'New Customers',
    value: '1,234',
    increase: '+12.5%',
    icon: <PersonAdd sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'success.main',
  },
  {
    title: 'Traffic',
    value: '45,678',
    increase: '+5.3%',
    icon: <Traffic sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'warning.main',
  },
];

const revenueTrendData = [
  {
    id: 'revenue',
    color: 'hsl(220, 70%, 50%)',
    data: [
      { x: 'Jan', y: 85000 },
      { x: 'Feb', y: 92000 },
      { x: 'Mar', y: 88000 },
      { x: 'Apr', y: 95000 },
      { x: 'May', y: 102000 },
      { x: 'Jun', y: 98000 },
      { x: 'Jul', y: 110000 },
      { x: 'Aug', y: 115000 },
      { x: 'Sep', y: 108000 },
      { x: 'Oct', y: 120000 },
      { x: 'Nov', y: 125000 },
      { x: 'Dec', y: 130000 },
    ],
  },
];

const monthlyPerformanceData = [
  { month: 'Jan', revenue: 85000, orders: 1200 },
  { month: 'Feb', revenue: 92000, orders: 1350 },
  { month: 'Mar', revenue: 88000, orders: 1280 },
  { month: 'Apr', revenue: 95000, orders: 1420 },
  { month: 'May', revenue: 102000, orders: 1580 },
  { month: 'Jun', revenue: 98000, orders: 1520 },
];

const Overview = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 4 }} fontWeight={600}>
          Sales Overview
        </Typography>
      </Fade>

      <Grid container spacing={{ xs: 2, md: 3 }} mb={{ xs: 2, md: 3 }}>
        {overviewStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Grow in={loaded} timeout={800 + index * 200}>
              <Card sx={{ height: '100%', minHeight: { xs: 120, md: 140 } }}>
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
                    <Box flex={1}>
                      <Typography variant="h5" fontWeight={700} mb={0.5}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={0.5}>
                        {stat.title}
                      </Typography>
                      <Typography variant="body2" color="success.main" fontWeight={600}>
                        {stat.increase}
                      </Typography>
                    </Box>
                    <Box sx={{ color: stat.color }}>
                      {stat.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} lg={8}>
          <Grow in={loaded} timeout={1400}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2} fontWeight={600}>
                  Revenue Trend
                </Typography>
                <Box height={{ xs: 250, sm: 300, md: 400 }}>
                  <ResponsiveLine
                    data={revenueTrendData}
                    margin={{ top: 20, right: 20, bottom: 50, left: 70 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                      type: 'linear',
                      min: 'auto',
                      max: 'auto',
                      stacked: true,
                      reverse: false,
                    }}
                    yFormat=" >-.2f"
                    curve="catmullRom"
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
                      legend: 'Revenue ($)',
                      legendOffset: -60,
                      legendPosition: 'middle',
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableArea={true}
                    areaOpacity={0.1}
                    useMesh={true}
                    animate={true}
                    motionConfig="gentle"
                    theme={{
                      axis: {
                        ticks: {
                          text: {
                            fill: theme.palette.text.primary,
                            fontSize: 12,
                          },
                        },
                        legend: {
                          text: {
                            fill: theme.palette.text.primary,
                            fontSize: 14,
                          },
                        },
                      },
                      grid: {
                        line: {
                          stroke: theme.palette.divider,
                          strokeWidth: 1,
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grow in={loaded} timeout={1600}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2} fontWeight={600}>
                  Monthly Performance
                </Typography>
                <Box height={{ xs: 250, sm: 300, md: 400 }}>
                  <ResponsiveBar
                    data={monthlyPerformanceData}
                    keys={['revenue']}
                    indexBy="month"
                    margin={{ top: 20, right: 20, bottom: 50, left: 70 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                    borderRadius={6}
                    enableLabel={false}
                    animate={true}
                    motionConfig="wobbly"
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Month',
                      legendPosition: 'middle',
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Revenue ($)',
                      legendPosition: 'middle',
                      legendOffset: -60,
                    }}
                    theme={{
                      axis: {
                        ticks: {
                          text: {
                            fill: theme.palette.text.primary,
                            fontSize: 12,
                          },
                        },
                        legend: {
                          text: {
                            fill: theme.palette.text.primary,
                            fontSize: 14,
                          },
                        },
                      },
                      grid: {
                        line: {
                          stroke: theme.palette.divider,
                          strokeWidth: 1,
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
