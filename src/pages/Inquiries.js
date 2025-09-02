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
  Badge,
} from '@mui/material';
import {
  Add,
  Search,
  Edit,
  Delete,
  Email,
  Phone,
  Schedule,
  PriorityHigh,
  CheckCircle,
  Pending,
} from '@mui/icons-material';

const mockInquiries = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+255 123 456 789',
    property: 'Beachfront Villa',
    type: 'Property Inquiry',
    status: 'New',
    priority: 'High',
    message: 'Interested in viewing the beachfront villa. Available for viewing this weekend?',
    date: '2024-01-15',
    agent: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+255 987 654 321',
    property: 'Downtown Apartment',
    type: 'Price Inquiry',
    status: 'In Progress',
    priority: 'Medium',
    message: 'What is the best price you can offer for the downtown apartment?',
    date: '2024-01-14',
    agent: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
  },
  {
    id: 3,
    name: 'David Brown',
    email: 'david.brown@email.com',
    phone: '+255 555 123 456',
    property: 'Commercial Office Space',
    type: 'General Inquiry',
    status: 'Resolved',
    priority: 'Low',
    message: 'Looking for commercial properties in the business district.',
    date: '2024-01-13',
    agent: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    phone: '+255 777 888 999',
    property: 'Garden House',
    type: 'Viewing Request',
    status: 'New',
    priority: 'High',
    message: 'Would like to schedule a viewing for the garden house property.',
    date: '2024-01-15',
    agent: 'David Brown',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

const inquiryTypes = ['All', 'Property Inquiry', 'Price Inquiry', 'Viewing Request', 'General Inquiry'];
const statuses = ['All', 'New', 'In Progress', 'Resolved', 'Closed'];
const priorities = ['All', 'High', 'Medium', 'Low'];

function Inquiries() {
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || inquiry.type === typeFilter;
    const matchesStatus = statusFilter === 'All' || inquiry.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || inquiry.priority === priorityFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'primary';
      case 'In Progress':
        return 'warning';
      case 'Resolved':
        return 'success';
      case 'Closed':
        return 'default';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'New':
        return <Pending />;
      case 'In Progress':
        return <Schedule />;
      case 'Resolved':
        return <CheckCircle />;
      case 'Closed':
        return <CheckCircle />;
      default:
        return <Pending />;
    }
  };

  const handleEdit = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setInquiries(inquiries.filter(i => i.id !== id));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Inquiries</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
        >
          Add Inquiry
        </Button>
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Search inquiries..."
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
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={typeFilter}
                  label="Type"
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  {inquiryTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
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
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={priorityFilter}
                  label="Priority"
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  {priorities.map((priority) => (
                    <MenuItem key={priority} value={priority}>{priority}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Inquiries Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Inquiry</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={inquiry.avatar}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">{inquiry.name}</Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 200 }}>
                        {inquiry.message.substring(0, 50)}...
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Box display="flex" alignItems="center" mb={0.5}>
                      <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">{inquiry.email}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">{inquiry.phone}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{inquiry.property}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{inquiry.type}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    icon={getStatusIcon(inquiry.status)}
                    label={inquiry.status}
                    color={getStatusColor(inquiry.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={inquiry.priority}
                    color={getPriorityColor(inquiry.priority)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{formatDate(inquiry.date)}</Typography>
                </TableCell>
                <TableCell>{inquiry.agent}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleEdit(inquiry)}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(inquiry.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Inquiry Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedInquiry ? 'Edit Inquiry' : 'Add New Inquiry'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Customer Name" defaultValue={selectedInquiry?.name} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" type="email" defaultValue={selectedInquiry?.email} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Phone" defaultValue={selectedInquiry?.phone} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Property" defaultValue={selectedInquiry?.property} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Inquiry Type</InputLabel>
                <Select defaultValue={selectedInquiry?.type || ''} label="Inquiry Type">
                  <MenuItem value="Property Inquiry">Property Inquiry</MenuItem>
                  <MenuItem value="Price Inquiry">Price Inquiry</MenuItem>
                  <MenuItem value="Viewing Request">Viewing Request</MenuItem>
                  <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select defaultValue={selectedInquiry?.status || ''} label="Status">
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Resolved">Resolved</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select defaultValue={selectedInquiry?.priority || ''} label="Priority">
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" multiline rows={4} defaultValue={selectedInquiry?.message} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Notes" multiline rows={3} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedInquiry ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Inquiries;

