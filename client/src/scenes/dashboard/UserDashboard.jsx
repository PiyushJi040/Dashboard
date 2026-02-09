import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useTheme, Fade } from '@mui/material';
import { ShoppingCart, People, AttachMoney, TrendingUp } from '@mui/icons-material';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import StatCard from 'components/StatCard';

const statData = [
  { title: 'Total Sales', value: '$12,345', increase: '+14%', icon: <ShoppingCart />, color: '#6366f1' },
  { title: 'Total Users', value: '1,234', increase: '+5%', icon: <People />, color: '#8b5cf6' },
  { title: 'Revenue', value: '$45,678', increase: '+20%', icon: <AttachMoney />, color: '#10b981' },
  { title: 'Growth', value: '23%', increase: '+8%', icon: <TrendingUp />, color: '#f59e0b' },
];

const barData = [
  { month: 'Jan', sales: 120 }, { month: 'Feb', sales: 150 }, { month: 'Mar', sales: 180 },
  { month: 'Apr', sales: 200 }, { month: 'May', sales: 250 }, { month: 'Jun', sales: 300 },
];

const pieData = [
  { id: 'Electronics', value: 40 }, { id: 'Clothing', value: 30 },
  { id: 'Books', value: 20 }, { id: 'Others', value: 10 },
];

const UserDashboard = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <Box p={{ xs: 3, md: 4 }} sx={{ background: 'transparent' }}>
      <Fade in={loaded} timeout={800}>
        <Box mb={4}>
          <Typography variant="h3" fontWeight={800} mb={1} sx={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            User Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">Welcome back! Here's what's happening today.</Typography>
        </Box>
      </Fade>

      <Grid container spacing={3} mb={4}>
        {statData.map((stat, i) => (
          <Grid item xs={12} sm={6} lg={3} key={i}>
            <StatCard {...stat} delay={i * 100} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <Box sx={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            borderRadius: 5,
            p: 3,
            height: { xs: 350, md: 450 },
          }}>
            <Typography variant="h6" fontWeight={700} mb={3}>Sales Performance</Typography>
            <Box height="85%">
              <ResponsiveBar
                data={barData}
                keys={['sales']}
                indexBy="month"
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                padding={0.4}
                colors={['#6366f1']}
                borderRadius={8}
                enableLabel={false}
                enableGridY={true}
                gridYValues={5}
                axisBottom={{ tickSize: 0, tickPadding: 10 }}
                axisLeft={{ tickSize: 0, tickPadding: 10 }}
                theme={{
                  axis: { ticks: { text: { fill: theme.palette.text.secondary, fontSize: 12 } } },
                  grid: { line: { stroke: 'rgba(148, 163, 184, 0.1)', strokeWidth: 1 } },
                }}
                animate={true}
                motionConfig="wobbly"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box sx={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            borderRadius: 5,
            p: 3,
            height: { xs: 350, md: 450 },
          }}>
            <Typography variant="h6" fontWeight={700} mb={3}>Category Distribution</Typography>
            <Box height="85%">
              <ResponsivePie
                data={pieData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.65}
                padAngle={2}
                cornerRadius={6}
                activeOuterRadiusOffset={8}
                colors={['#6366f1', '#8b5cf6', '#d946ef', '#f59e0b']}
                borderWidth={0}
                enableArcLinkLabels={true}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsTextColor="#ffffff"
                animate={true}
                motionConfig="gentle"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
