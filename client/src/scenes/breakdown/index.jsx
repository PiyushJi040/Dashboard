import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

const categoryBreakdownData = [
  { id: 'Electronics', value: 35, color: '#8884d8' },
  { id: 'Clothing', value: 25, color: '#82ca9d' },
  { id: 'Home & Garden', value: 20, color: '#ffc658' },
  { id: 'Sports', value: 12, color: '#ff7c7c' },
  { id: 'Books', value: 8, color: '#8dd1e1' },
];

const ageGroupData = [
  { age: '18-24', sales: 45000 },
  { age: '25-34', sales: 78000 },
  { age: '35-44', sales: 65000 },
  { age: '45-54', sales: 52000 },
  { age: '55+', sales: 38000 },
];

const genderData = [
  { id: 'Male', value: 55, color: '#8884d8' },
  { id: 'Female', value: 45, color: '#82ca9d' },
];

const regionData = [
  { region: 'North America', sales: 120000 },
  { region: 'Europe', sales: 95000 },
  { region: 'Asia', sales: 85000 },
  { region: 'South America', sales: 45000 },
  { region: 'Africa', sales: 25000 },
  { region: 'Oceania', sales: 15000 },
];

const Breakdown = () => {
  const theme = useTheme();
  const [selectedBreakdown, setSelectedBreakdown] = useState('category');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const getBreakdownData = () => {
    switch (selectedBreakdown) {
      case 'category':
        return categoryBreakdownData;
      case 'gender':
        return genderData;
      default:
        return categoryBreakdownData;
    }
  };

  const getBarData = () => {
    switch (selectedBreakdown) {
      case 'age':
        return ageGroupData;
      case 'region':
        return regionData;
      default:
        return ageGroupData;
    }
  };

  const getBreakdownTitle = () => {
    switch (selectedBreakdown) {
      case 'category':
        return 'Sales by Category';
      case 'gender':
        return 'Sales by Gender';
      case 'age':
        return 'Sales by Age Group';
      case 'region':
        return 'Sales by Region';
      default:
        return 'Sales Breakdown';
    }
  };

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Fade in={loaded} timeout={800}>
        <Typography variant="h4" mb={{ xs: 2, md: 3 }} fontWeight={600}>
          Sales Breakdown
        </Typography>
      </Fade>

      <Fade in={loaded} timeout={1000}>
        <Box mb={{ xs: 2, md: 3 }}>
          <FormControl sx={{ minWidth: { xs: '100%', sm: 250 } }}>
            <InputLabel>Breakdown Type</InputLabel>
            <Select
              value={selectedBreakdown}
              label="Breakdown Type"
              onChange={(e) => setSelectedBreakdown(e.target.value)}
            >
              <MenuItem value="category">By Category</MenuItem>
              <MenuItem value="gender">By Gender</MenuItem>
              <MenuItem value="age">By Age Group</MenuItem>
              <MenuItem value="region">By Region</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Fade>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} lg={6}>
          <Grow in={loaded} timeout={1200}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2} fontWeight={600}>
                  {getBreakdownTitle()}
                </Typography>
                <Box height={{ xs: 300, sm: 350, md: 450 }}>
                  <ResponsivePie
                    data={getBreakdownData()}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.6}
                    padAngle={1}
                    cornerRadius={4}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={2}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableArcLinkLabels={true}
                    arcLinkLabelsTextColor={theme.palette.text.primary}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                    animate={true}
                    motionConfig="gentle"
                    theme={{
                      labels: {
                        text: {
                          fill: theme.palette.text.primary,
                          fontSize: 12,
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grow in={loaded} timeout={1400}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2} fontWeight={600}>
                  {selectedBreakdown === 'age' ? 'Sales by Age Group' : 'Sales by Region'}
                </Typography>
                <Box height={{ xs: 300, sm: 350, md: 450 }}>
                  <ResponsiveBar
                    data={getBarData()}
                    keys={['sales']}
                    indexBy={selectedBreakdown === 'age' ? 'age' : 'region'}
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
                      legend: selectedBreakdown === 'age' ? 'Age Group' : 'Region',
                      legendPosition: 'middle',
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Sales ($)',
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

export default Breakdown;
