# Zanzpalm Admin Panel

A simple, ready-to-use admin panel for managing Zanzpalm real estate properties.

## Files

- `admin.html` - Main admin dashboard
- `property-form.html` - Comprehensive property form for adding new properties
- `README-ADMIN.md` - This file

## Features

### Admin Dashboard (`admin.html`)
- **Dashboard Overview** - Key metrics and statistics
- **Quick Actions** - Easy access to common tasks
- **Recent Properties** - View and manage existing properties
- **Navigation** - Access to all admin functions

### Property Form (`property-form.html`)
Complete property form that handles all Supabase database fields:

#### Basic Information
- ✅ Property Title
- ✅ Location (Zanzibar/Arusha)
- ✅ Specific Location (e.g., Paje, Arusha City)
- ✅ Property Type (beachfront, plot, farmland, apartment, hotel, lodge, resort, unfurnished-dev, villa)
- ✅ Status (for-rent, for-sale, reserved, sold)
- ✅ Featured Property toggle
- ✅ Description

#### Pricing & Measurements
- ✅ Price
- ✅ Currency (USD, EUR, TZS)
- ✅ Area
- ✅ Area Unit (sqm, sqft, acres)
- ✅ Bedrooms
- ✅ Bathrooms

#### Media & Files
- ✅ Multiple Property Images upload
- ✅ Floor Plan upload
- ✅ Video URL

#### Additional Details
- ✅ Amenities (multi-select)
- ✅ Coordinates (latitude/longitude)

## How to Use

1. **Open the admin panel**: Open `admin.html` in your web browser
2. **Add a new property**: Click "Add Property" or navigate to `property-form.html`
3. **Fill out the form**: Complete all required fields (marked with *)
4. **Upload images**: Click the upload areas to select property images
5. **Submit**: Click "Add Property" to save

## Integration with Supabase

The property form is designed to work with your Supabase database schema. When you're ready to connect it:

1. **Replace the form submission** in `property-form.html` with your Supabase API calls
2. **Add authentication** to protect the admin panel
3. **Connect to your existing website** by linking to these files

## Data Structure

The form collects data in this format:

```javascript
{
  title: "Beachfront Villa",
  location: "zanzibar",
  specific_location: "Paje",
  property_type: "villa",
  status: "for-sale",
  featured: true,
  description: "Beautiful beachfront villa...",
  price: 850000,
  price_currency: "USD",
  area: 450,
  area_unit: "sqm",
  bedrooms: 3,
  bathrooms: 2,
  images: [File1, File2, ...],
  floor_plan: File,
  video_url: "https://youtube.com/...",
  amenities: ["Private Pool", "Security System", ...],
  latitude: -6.1659,
  longitude: 39.2026
}
```

## Customization

- **Colors**: Modify the CSS variables in the style sections
- **Fields**: Add or remove form fields as needed
- **Validation**: Update the JavaScript validation rules
- **Styling**: Customize the design to match your brand

## Next Steps

1. **Test the forms** - Make sure all fields work as expected
2. **Connect to Supabase** - Replace the mock submission with real API calls
3. **Add authentication** - Protect the admin panel with login
4. **Deploy** - Upload to your web server
5. **Integrate** - Link from your main website

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Support

This admin panel is ready to use immediately. Simply open the HTML files in your browser to start managing properties!
