import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const StatCard = ({ title, value, increase, icon, color, delay = 0 }) => {
  const theme = useTheme();
  const isPositive = increase?.startsWith('+');

  return (
    <Card
      sx={{
        height: '100%',
        minHeight: { xs: 140, md: 160 },
        position: 'relative',
        overflow: 'hidden',
        animation: `fadeInUp 0.6s ease-out ${delay}ms both`,
        '@keyframes fadeInUp': {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -50,
          right: -50,
          width: 150,
          height: 150,
          background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
          borderRadius: '50%',
        },
      }}
    >
      <CardContent sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ 
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${color} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {value}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
              fontSize: { xs: 28, md: 32 },
            }}
          >
            {icon}
          </Box>
        </Box>
        {increase && (
          <Box display="flex" alignItems="center" gap={0.5}>
            {isPositive ? (
              <TrendingUp sx={{ fontSize: 18, color: theme.palette.success.main }} />
            ) : (
              <TrendingDown sx={{ fontSize: 18, color: theme.palette.error.main }} />
            )}
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color: isPositive ? theme.palette.success.main : theme.palette.error.main,
                fontSize: 14,
              }}
            >
              {increase}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
              vs last period
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
