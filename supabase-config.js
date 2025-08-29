// Supabase Configuration for Zanzpalm Admin Panel
// This file contains the Supabase client configuration

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zaqodpokacrvkitqlsam.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphcW9kcG9rYWNydmtpdHFsc2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzU4OTQsImV4cCI6MjA3MTcxMTg5NH0.bSDJfgnfJGYTrQrrmuQJj2J_2IVex4UrQeTNYYKbIt0';

// Database Tables Configuration
const TABLES = {
    PROPERTIES: 'properties',
    CLIENTS: 'clients',
    AGENTS: 'agents',
    INQUIRIES: 'inquiries',
    USERS: 'users'
};

// Property Types (matching your form)
const PROPERTY_TYPES = [
    'beachfront',
    'plot',
    'farmland',
    'apartment',
    'hotel',
    'lodge',
    'resort',
    'unfurnished-dev',
    'villa'
];

// Property Status Options
const PROPERTY_STATUS = [
    'for-rent',
    'for-sale',
    'reserved',
    'sold'
];

// Location Data (matching your form)
const LOCATION_DATA = {
    zanzibar: [
        'Stone Town', 'Paje', 'Nungwi', 'Kendwa', 'Jambiani', 'Bwejuu', 'Michamvi', 'Kizimkazi',
        'Matemwe', 'Pongwe', 'Uroa', 'Mangapwani', 'Chwaka', 'Makunduchi', 'Kiwengwa', 'Mkokotoni',
        'Nungwi Beach', 'Kendwa Rocks', 'Jambiani Beach', 'Bwejuu Beach'
    ],
    arusha: [
        'Arusha City', 'Arusha District', 'Meru District', 'Monduli District', 'Longido District',
        'Ngorongoro District', 'Karatu District', 'Mbulu District', 'Babati District', 'Hanang District',
        'Kiteto District', 'Simanjiro District', 'Kilimanjaro Region', 'Usa River', 'Tengeru',
        'Ngaramtoni', 'Sakina', 'Themi', 'Sanawari', 'Moshono'
    ]
};

// Export configuration
export {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    TABLES,
    PROPERTY_TYPES,
    PROPERTY_STATUS,
    LOCATION_DATA
};

// For CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        TABLES,
        PROPERTY_TYPES,
        PROPERTY_STATUS,
        LOCATION_DATA
    };
}
