# Supabase Integration Setup for Zanzpalm Admin Panel

## 🔧 Environment Configuration

### 1. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://zaqodpokacrvkitqlsam.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphcW9kcG9rYWNydmtpdHFsc2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzU4OTQsImV4cCI6MjA3MTcxMTg5NH0.bSDJfgnfJGYTrQrrmuQJj2J_2IVex4UrQeTNYYKbIt0
```

### 2. Installation
Install the Supabase JavaScript client:

```bash
npm install @supabase/supabase-js
```

## 📊 Database Schema

### Properties Table
```sql
CREATE TABLE properties (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT NOT NULL,
    specific_location TEXT NOT NULL,
    property_type TEXT NOT NULL CHECK (property_type IN ('beachfront', 'plot', 'farmland', 'apartment', 'hotel', 'lodge', 'resort', 'unfurnished-dev', 'villa')),
    status TEXT NOT NULL CHECK (status IN ('for-rent', 'for-sale', 'reserved', 'sold')),
    featured BOOLEAN DEFAULT false,
    price DECIMAL(12,2) NOT NULL,
    price_currency TEXT DEFAULT 'USD',
    area DECIMAL(10,2),
    area_unit TEXT DEFAULT 'sqm',
    bedrooms INTEGER,
    bathrooms INTEGER,
    images TEXT[], -- Array of image URLs
    floor_plan TEXT, -- Single image URL
    video_url TEXT,
    amenities TEXT[], -- Array of amenities
    coordinates POINT, -- PostgreSQL point type for lat/lng
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Clients Table
```sql
CREATE TABLE clients (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    type TEXT CHECK (type IN ('buyer', 'seller', 'investor')),
    status TEXT DEFAULT 'active',
    budget DECIMAL(12,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Agents Table
```sql
CREATE TABLE agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    position TEXT,
    status TEXT DEFAULT 'active',
    properties_count INTEGER DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Inquiries Table
```sql
CREATE TABLE inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    property_id UUID REFERENCES properties(id),
    type TEXT CHECK (type IN ('property_inquiry', 'price_inquiry', 'viewing_request')),
    status TEXT DEFAULT 'new',
    message TEXT,
    agent_id UUID REFERENCES agents(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔌 Integration Examples

### 1. Initialize Supabase Client
```javascript
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './supabase-config.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### 2. Add Property
```javascript
async function addProperty(propertyData) {
    try {
        const { data, error } = await supabase
            .from('properties')
            .insert([propertyData])
            .select();
        
        if (error) throw error;
        return data[0];
    } catch (error) {
        console.error('Error adding property:', error);
        throw error;
    }
}
```

### 3. Get Properties
```javascript
async function getProperties() {
    try {
        const { data, error } = await supabase
            .from('properties')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
    }
}
```

### 4. Update Property
```javascript
async function updateProperty(id, updates) {
    try {
        const { data, error } = await supabase
            .from('properties')
            .update(updates)
            .eq('id', id)
            .select();
        
        if (error) throw error;
        return data[0];
    } catch (error) {
        console.error('Error updating property:', error);
        throw error;
    }
}
```

### 5. Delete Property
```javascript
async function deleteProperty(id) {
    try {
        const { error } = await supabase
            .from('properties')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting property:', error);
        throw error;
    }
}
```

## 🔐 Authentication (Optional)

### Enable Row Level Security (RLS)
```sql
-- Enable RLS on tables
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Example policy for properties (admin can do everything)
CREATE POLICY "Admin can do everything" ON properties
    FOR ALL USING (auth.role() = 'authenticated');
```

## 📁 File Structure
```
admin-panel/
├── .env.local                 # Environment variables (create this)
├── env.example               # Example environment file
├── supabase-config.js        # Supabase configuration
├── SUPABASE_SETUP.md         # This file
├── admin.html                # Main admin panel
├── property-form.html        # Property form
└── README.md                 # Main project README
```

## 🚀 Next Steps

1. **Set up your local environment**:
   ```bash
   cp env.example .env.local
   ```

2. **Install dependencies**:
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Create database tables** using the SQL schema above

4. **Integrate the API calls** into your admin panel

5. **Test the integration** with real data

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 📞 Support

For database-related issues, contact your database administrator or refer to the Supabase documentation.

