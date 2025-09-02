import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Business,
  Notifications,
  Security,
  Language,
  Palette,
  AccountCircle,
  Email,
  Phone,
  LocationOn,
  Save,
  Edit,
} from '@mui/icons-material';

function Settings() {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Zanzpalm Real Estate',
    email: 'info@zanzpalm.com',
    phone: '+255 123 456 789',
    address: 'Stone Town, Zanzibar, Tanzania',
    website: 'www.zanzpalm.com',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newInquiries: true,
    propertyUpdates: true,
    systemAlerts: true,
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    language: 'English',
    timezone: 'Africa/Dar_es_Salaam',
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleNotificationChange = (setting) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Settings saved');
  };

  const openEditDialog = (type) => {
    setDialogType(type);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Company Information */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Business sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Company Information</Typography>
                <Button
                  size="small"
                  startIcon={<Edit />}
                  onClick={() => openEditDialog('company')}
                  sx={{ ml: 'auto' }}
                >
                  Edit
                </Button>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Company Name
                </Typography>
                <Typography variant="body1">{companyInfo.name}</Typography>
              </Box>
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Email
                </Typography>
                <Typography variant="body1">{companyInfo.email}</Typography>
              </Box>
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Phone
                </Typography>
                <Typography variant="body1">{companyInfo.phone}</Typography>
              </Box>
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Address
                </Typography>
                <Typography variant="body1">{companyInfo.address}</Typography>
              </Box>
              
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Website
                </Typography>
                <Typography variant="body1">{companyInfo.website}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* User Profile */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <AccountCircle sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">User Profile</Typography>
                <Button
                  size="small"
                  startIcon={<Edit />}
                  onClick={() => openEditDialog('profile')}
                  sx={{ ml: 'auto' }}
                >
                  Edit
                </Button>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  sx={{ width: 80, height: 80, mr: 2 }}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                />
                <Box>
                  <Typography variant="h6">Admin User</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Administrator
                  </Typography>
                </Box>
              </Box>
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Email
                </Typography>
                <Typography variant="body1">admin@zanzpalm.com</Typography>
              </Box>
              
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Role
                </Typography>
                <Typography variant="body1">System Administrator</Typography>
              </Box>
              
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Last Login
                </Typography>
                <Typography variant="body1">Today at 9:30 AM</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Notifications sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Notifications</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <List>
                <ListItem>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive notifications via email"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.emailNotifications}
                      onChange={() => handleNotificationChange('emailNotifications')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="SMS Notifications"
                    secondary="Receive notifications via SMS"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.smsNotifications}
                      onChange={() => handleNotificationChange('smsNotifications')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="New Inquiries"
                    secondary="Get notified about new inquiries"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.newInquiries}
                      onChange={() => handleNotificationChange('newInquiries')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Property Updates"
                    secondary="Get notified about property changes"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.propertyUpdates}
                      onChange={() => handleNotificationChange('propertyUpdates')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="System Alerts"
                    secondary="Receive system maintenance alerts"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.systemAlerts}
                      onChange={() => handleNotificationChange('systemAlerts')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance & Language */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Palette sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Appearance & Language</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <Box mb={3}>
                <FormControl fullWidth>
                  <InputLabel>Theme</InputLabel>
                  <Select
                    value={appearance.theme}
                    label="Theme"
                    onChange={(e) => setAppearance(prev => ({ ...prev, theme: e.target.value }))}
                  >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="auto">Auto</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              <Box mb={3}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={appearance.language}
                    label="Language"
                    onChange={(e) => setAppearance(prev => ({ ...prev, language: e.target.value }))}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Swahili">Swahili</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Timezone</InputLabel>
                  <Select
                    value={appearance.timezone}
                    label="Timezone"
                    onChange={(e) => setAppearance(prev => ({ ...prev, timezone: e.target.value }))}
                  >
                    <MenuItem value="Africa/Dar_es_Salaam">Africa/Dar es Salaam</MenuItem>
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="Europe/London">Europe/London</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Security */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Security sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Security</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" fullWidth>
                    Change Password
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" fullWidth>
                    Enable Two-Factor Authentication
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          variant="contained"
          startIcon={<Save />}
          onClick={handleSave}
          size="large"
        >
          Save Settings
        </Button>
      </Box>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {dialogType === 'company' ? 'Edit Company Information' : 'Edit Profile'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" defaultValue={companyInfo.name} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" type="email" defaultValue={companyInfo.email} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" defaultValue={companyInfo.phone} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" multiline rows={2} defaultValue={companyInfo.address} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Website" defaultValue={companyInfo.website} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Settings;

