import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
} from '@mui/material';
import {
  Add,
  Search,
  Edit,
  Delete,
  Email,
  Phone,
  Star,
  Business,
} from '@mui/icons-material';

const mockAgents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@zanzpalm.com',
    phone: '+255 123 456 789',
    position: 'Senior Agent',
    status: 'Active',
    rating: 4.8,
    properties: 12,
    sales: 8,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.chen@zanzpalm.com',
    phone: '+255 987 654 321',
    position: 'Agent',
    status: 'Active',
    rating: 4.5,
    properties: 8,
    sales: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 3,
    name: 'Lisa Wang',
    email: 'lisa.wang@zanzpalm.com',
    phone: '+255 555 123 456',
    position: 'Junior Agent',
    status: 'Active',
    rating: 4.2,
    properties: 5,
    sales: 3,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@zanzpalm.com',
    phone: '+255 777 888 999',
    position: 'Agent',
    status: 'Inactive',
    rating: 4.0,
    properties: 6,
    sales: 4,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
];

const positions = ['All', 'Senior Agent', 'Agent', 'Junior Agent', 'Intern'];
const statuses = ['All', 'Active', 'Inactive', 'On Leave'];

function Agents() {
  const [agents, setAgents] = useState(mockAgents);
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === 'All' || agent.position === positionFilter;
    const matchesStatus = statusFilter === 'All' || agent.status === statusFilter;
    
    return matchesSearch && matchesPosition && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'default';
      case 'On Leave':
        return 'warning';
      default:
        return 'default';
    }
  };

  const handleEdit = (agent) => {
    setSelectedAgent(agent);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setAgents(agents.filter(a => a.id !== id));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Agents</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
        >
          Add Agent
        </Button>
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Position</InputLabel>
                <Select
                  value={positionFilter}
                  label="Position"
                  onChange={(e) => setPositionFilter(e.target.value)}
                >
                  {positions.map((position) => (
                    <MenuItem key={position} value={position}>{position}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>{status}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Agents Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Agent</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Properties</TableCell>
              <TableCell>Sales</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={agent.avatar}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">{agent.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: {agent.id}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Box display="flex" alignItems="center" mb={0.5}>
                      <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">{agent.email}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">{agent.phone}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{agent.position}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={agent.status}
                    color={getStatusColor(agent.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Rating value={agent.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {agent.rating}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{agent.properties}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="bold">
                    {agent.sales}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleEdit(agent)}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(agent.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Agent Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedAgent ? 'Edit Agent' : 'Add New Agent'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Full Name" defaultValue={selectedAgent?.name} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" type="email" defaultValue={selectedAgent?.email} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Phone" defaultValue={selectedAgent?.phone} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Position</InputLabel>
                <Select defaultValue={selectedAgent?.position || ''} label="Position">
                  <MenuItem value="Senior Agent">Senior Agent</MenuItem>
                  <MenuItem value="Agent">Agent</MenuItem>
                  <MenuItem value="Junior Agent">Junior Agent</MenuItem>
                  <MenuItem value="Intern">Intern</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select defaultValue={selectedAgent?.status || ''} label="Status">
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="On Leave">On Leave</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Commission Rate (%)" type="number" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Notes" multiline rows={3} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedAgent ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Agents;

