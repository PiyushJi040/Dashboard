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
  CalendarMonth,
  TrendingUp,
  ShoppingCart,
  AttachMoney,
} from '@mui/icons-material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const monthlyStats = [
  {
    title: 'Monthly Sales',
    value: '$345,678',
    increase: '+18.2%',
    icon: <ShoppingCart sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'primary.main',
  },
  {
    title: 'Monthly Revenue',
    value: '$234,567',
    increase: '+22.5%',
    icon: <AttachMoney sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'secondary.main',
  },
  {
    title: 'Orders This Month',
    value: '4,567',
    increase: '+25.3%',
    icon: <CalendarMonth sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'success.main',
  },
  {
    title: 'Growth Rate',
    value: '23.4%',
    increase: '+8.7%',
    icon: <TrendingUp sx={{ fontSize: { xs: 32, md: 48 } }} />,
    color: 'warning.main',
  },
];

const monthlyTrendData = [
  {
    id: 'revenue',
    color: 'hsl(220, 70%, 50%)',
    data: [
      { x: 'Week 1', y: 45000 },
      { x: 'Week 2', y: 52000 },
      { x: 'Week 3', y: 48000 },
      { x: 'Week 4', y: 61000 },
    ],
  },
];

const categoryPerformanceData = [
  { category: 'Electronics', sales: 125000 },
  { category: 'Clothing', sales: 89000 },
  { category: 'Home & Garden', sales: 67000 },
  { category: 'Sports', sales: 54000 },
  { category: 'Books', sales: 31000 },
];

const Monthly = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 4 }} fontWeight={600}>
          Monthly Sales Report
        </Typography>
      </Fade>

      <Grid container spacing={{ xs: 2, md: 3 }} mb={{ xs: 2, md: 3 }}>
        {monthlyStats.map((stat, index) => (
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
                  Weekly Revenue Trend
                </Typography>
                <Box height={{ xs: 250, sm: 300, md: 400 }}>
                  <ResponsiveLine
                    data={monthlyTrendData}
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
                      legend: 'Week',
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
                    pointSize={12}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={3}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableArea={true}
                    areaOpacity={0.15}
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
                  Category Performance
                </Typography>
                <Box height={{ xs: 250, sm: 300, md: 400 }}>
                  <ResponsiveBar
                    data={categoryPerformanceData}
                    keys={['sales']}
                    indexBy="category"
                    margin={{ top: 20, right: 20, bottom: 50, left: 90 }}
                    padding={0.3}
                    layout="horizontal"
                    colors={{ scheme: 'nivo' }}
                    borderRadius={6}
                    enableLabel={false}
                    animate={true}
                    motionConfig="wobbly"
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Sales ($)',
                      legendPosition: 'middle',
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: '',
                      legendPosition: 'middle',
                      legendOffset: -40,
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

export default Monthly;
