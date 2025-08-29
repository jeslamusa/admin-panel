import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  Home,
  People,
  AttachMoney,
  Visibility,
  CheckCircle,
  Schedule,
  Warning,
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
} from 'recharts';

const data = [
  { name: 'Jan', properties: 12, inquiries: 45, sales: 8 },
  { name: 'Feb', properties: 15, inquiries: 52, sales: 10 },
  { name: 'Mar', properties: 18, inquiries: 48, sales: 12 },
  { name: 'Apr', properties: 22, inquiries: 65, sales: 15 },
  { name: 'May', properties: 25, inquiries: 58, sales: 18 },
  { name: 'Jun', properties: 28, inquiries: 72, sales: 22 },
];

const pieData = [
  { name: 'Residential', value: 45, color: '#667eea' },
  { name: 'Commercial', value: 30, color: '#764ba2' },
  { name: 'Luxury', value: 15, color: '#f093fb' },
  { name: 'Rental', value: 10, color: '#4facfe' },
];

const recentActivities = [
  {
    id: 1,
    type: 'property',
    message: 'New property listed: Beachfront Villa',
    time: '2 hours ago',
    status: 'active',
  },
  {
    id: 2,
    type: 'inquiry',
    message: 'New inquiry for Downtown Apartment',
    time: '4 hours ago',
    status: 'pending',
  },
  {
    id: 3,
    type: 'sale',
    message: 'Property sold: Garden House',
    time: '1 day ago',
    status: 'completed',
  },
  {
    id: 4,
    type: 'client',
    message: 'New client registered: John Smith',
    time: '2 days ago',
    status: 'active',
  },
];

const StatCard = ({ title, value, icon, color, trend }) => (
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
          {trend && (
            <Box display="flex" alignItems="center" mt={1}>
              <TrendingUp sx={{ color: 'success.main', fontSize: 16, mr: 0.5 }} />
              <Typography variant="body2" color="success.main">
                {trend}
              </Typography>
            </Box>
          )}
        </Box>
        <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
          {icon}
        </Avatar>
      </Box>
    </CardContent>
  </Card>
);

const ActivityItem = ({ activity }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'property':
        return <Home />;
      case 'inquiry':
        return <Visibility />;
      case 'sale':
        return <CheckCircle />;
      case 'client':
        return <People />;
      default:
        return <Schedule />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          {getIcon(activity.type)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={activity.message}
        secondary={activity.time}
      />
      <Chip
        label={activity.status}
        color={getStatusColor(activity.status)}
        size="small"
      />
    </ListItem>
  );
};

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Properties"
            value="156"
            icon={<Home />}
            color="#667eea"
            trend="+12% this month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Clients"
            value="89"
            icon={<People />}
            color="#764ba2"
            trend="+8% this month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Monthly Revenue"
            value="$125K"
            icon={<AttachMoney />}
            color="#f093fb"
            trend="+15% this month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="New Inquiries"
            value="23"
            icon={<Visibility />}
            color="#4facfe"
            trend="+5% this week"
          />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Property Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="properties" stroke="#667eea" strokeWidth={2} />
                  <Line type="monotone" dataKey="inquiries" stroke="#764ba2" strokeWidth={2} />
                  <Line type="monotone" dataKey="sales" stroke="#f093fb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Property Types
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List>
                {recentActivities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
