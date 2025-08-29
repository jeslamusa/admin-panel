import React, { useState } from 'react';
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
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Download,
  DateRange,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', sales: 8, revenue: 1200000, inquiries: 45, properties: 12 },
  { month: 'Feb', sales: 10, revenue: 1500000, inquiries: 52, properties: 15 },
  { month: 'Mar', sales: 12, revenue: 1800000, inquiries: 48, properties: 18 },
  { month: 'Apr', sales: 15, revenue: 2200000, inquiries: 65, properties: 22 },
  { month: 'May', sales: 18, revenue: 2700000, inquiries: 58, properties: 25 },
  { month: 'Jun', sales: 22, revenue: 3300000, inquiries: 72, properties: 28 },
];

const propertyTypeData = [
  { type: 'Residential', value: 45, color: '#667eea' },
  { type: 'Commercial', value: 30, color: '#764ba2' },
  { type: 'Luxury', value: 15, color: '#f093fb' },
  { type: 'Rental', value: 10, color: '#4facfe' },
];

const agentPerformance = [
  { name: 'Sarah Johnson', sales: 8, revenue: 1200000, rating: 4.8 },
  { name: 'Mike Chen', sales: 5, revenue: 750000, rating: 4.5 },
  { name: 'Lisa Wang', sales: 3, revenue: 450000, rating: 4.2 },
  { name: 'David Brown', sales: 4, revenue: 600000, rating: 4.0 },
];

const topProperties = [
  { name: 'Beachfront Villa', price: 850000, views: 245, status: 'For Sale' },
  { name: 'Downtown Apartment', price: 250000, views: 189, status: 'For Sale' },
  { name: 'Commercial Office Space', price: 1200000, views: 156, status: 'For Rent' },
  { name: 'Garden House', price: 450000, views: 134, status: 'Sold' },
];

function Reports() {
  const [timeRange, setTimeRange] = useState('6months');

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const StatCard = ({ title, value, change, changeType, icon }) => (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              {changeType === 'up' ? (
                <TrendingUp sx={{ color: 'success.main', fontSize: 16, mr: 0.5 }} />
              ) : (
                <TrendingDown sx={{ color: 'error.main', fontSize: 16, mr: 0.5 }} />
              )}
              <Typography 
                variant="body2" 
                color={changeType === 'up' ? 'success.main' : 'error.main'}
              >
                {change}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ color: 'primary.main' }}>
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Reports & Analytics</Typography>
        <Box display="flex" gap={2}>
          <FormControl size="small">
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="1month">Last Month</MenuItem>
              <MenuItem value="3months">Last 3 Months</MenuItem>
              <MenuItem value="6months">Last 6 Months</MenuItem>
              <MenuItem value="1year">Last Year</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" startIcon={<Download />}>
            Export Report
          </Button>
        </Box>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Sales"
            value="22"
            change="+22% this month"
            changeType="up"
            icon={<TrendingUp />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Revenue"
            value={formatCurrency(3300000)}
            change="+18% this month"
            changeType="up"
            icon={<TrendingUp />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="New Inquiries"
            value="72"
            change="+12% this month"
            changeType="up"
            icon={<TrendingUp />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Properties"
            value="28"
            change="+8% this month"
            changeType="up"
            icon={<TrendingUp />}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales & Revenue Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#667eea" 
                    fill="#667eea" 
                    fillOpacity={0.3}
                    name="Sales"
                  />
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#764ba2" 
                    fill="#764ba2" 
                    fillOpacity={0.3}
                    name="Revenue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Property Types Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={propertyTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {propertyTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Agent Performance */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Agent Performance
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Agent</TableCell>
                      <TableCell>Sales</TableCell>
                      <TableCell>Revenue</TableCell>
                      <TableCell>Rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {agentPerformance.map((agent) => (
                      <TableRow key={agent.name}>
                        <TableCell>{agent.name}</TableCell>
                        <TableCell>{agent.sales}</TableCell>
                        <TableCell>{formatCurrency(agent.revenue)}</TableCell>
                        <TableCell>
                          <Chip 
                            label={agent.rating} 
                            color="primary" 
                            size="small" 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Performing Properties
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Property</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Views</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProperties.map((property) => (
                      <TableRow key={property.name}>
                        <TableCell>{property.name}</TableCell>
                        <TableCell>{formatCurrency(property.price)}</TableCell>
                        <TableCell>{property.views}</TableCell>
                        <TableCell>
                          <Chip 
                            label={property.status} 
                            color={property.status === 'Sold' ? 'success' : 'primary'} 
                            size="small" 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Inquiries Trend */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Inquiries Trend
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="inquiries" 
                stroke="#f093fb" 
                strokeWidth={3}
                name="Inquiries"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Reports;
