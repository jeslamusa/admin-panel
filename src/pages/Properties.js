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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Avatar,
} from '@mui/material';
import {
  Add,
  Search,
  Edit,
  Delete,
  Visibility,
  Home,
  Business,
  Apartment,
  Villa,
} from '@mui/icons-material';

const mockProperties = [
  {
    id: 1,
    title: 'Beachfront Villa',
    type: 'Villa',
    location: 'Stone Town, Zanzibar',
    price: 850000,
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 450,
    agent: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400',
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    type: 'Apartment',
    location: 'City Center, Zanzibar',
    price: 250000,
    status: 'For Sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    agent: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
  },
  {
    id: 3,
    title: 'Commercial Office Space',
    type: 'Commercial',
    location: 'Business District',
    price: 1200000,
    status: 'For Rent',
    bedrooms: 0,
    bathrooms: 2,
    area: 800,
    agent: 'Lisa Wang',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
  },
  {
    id: 4,
    title: 'Garden House',
    type: 'House',
    location: 'Suburban Area',
    price: 450000,
    status: 'Sold',
    bedrooms: 3,
    bathrooms: 2,
    area: 280,
    agent: 'David Brown',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
  },
];

const propertyTypes = ['All', 'House', 'Apartment', 'Villa', 'Commercial'];
const statuses = ['All', 'For Sale', 'For Rent', 'Sold', 'Rented'];

function Properties() {
  const [properties, setProperties] = useState(mockProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || property.type === typeFilter;
    const matchesStatus = statusFilter === 'All' || property.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'For Sale':
        return 'primary';
      case 'For Rent':
        return 'secondary';
      case 'Sold':
        return 'success';
      case 'Rented':
        return 'info';
      default:
        return 'default';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'House':
        return <Home />;
      case 'Apartment':
        return <Apartment />;
      case 'Villa':
        return <Villa />;
      case 'Commercial':
        return <Business />;
      default:
        return <Home />;
    }
  };

  const handleEdit = (property) => {
    setSelectedProperty(property);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Properties</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
        >
          Add Property
        </Button>
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search properties..."
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
                <InputLabel>Property Type</InputLabel>
                <Select
                  value={typeFilter}
                  label="Property Type"
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
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

      {/* Properties Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProperties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={property.image}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">{property.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {property.bedrooms} bed, {property.bathrooms} bath
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    {getTypeIcon(property.type)}
                    <Typography sx={{ ml: 1 }}>{property.type}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {formatPrice(property.price)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={property.status}
                    color={getStatusColor(property.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {property.area} m²
                  </Typography>
                </TableCell>
                <TableCell>{property.agent}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton size="small" color="primary" onClick={() => handleEdit(property)}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(property.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Property Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedProperty ? 'Edit Property' : 'Add New Property'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Property Title" defaultValue={selectedProperty?.title} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Property Type</InputLabel>
                <Select defaultValue={selectedProperty?.type || ''} label="Property Type">
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Location" defaultValue={selectedProperty?.location} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Price" type="number" defaultValue={selectedProperty?.price} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select defaultValue={selectedProperty?.status || ''} label="Status">
                  <MenuItem value="For Sale">For Sale</MenuItem>
                  <MenuItem value="For Rent">For Rent</MenuItem>
                  <MenuItem value="Sold">Sold</MenuItem>
                  <MenuItem value="Rented">Rented</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Area (m²)" type="number" defaultValue={selectedProperty?.area} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bedrooms" type="number" defaultValue={selectedProperty?.bedrooms} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bathrooms" type="number" defaultValue={selectedProperty?.bathrooms} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" multiline rows={4} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedProperty ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Properties;
