# Zanzpalm Real Estate Admin Panel

A modern, responsive admin panel built for Zanzpalm Real Estate to manage properties, clients, agents, and business operations.

## 🏠 Features

### 📊 Dashboard
- **Overview Metrics**: Total properties, active clients, monthly revenue, new inquiries
- **Performance Charts**: Property performance trends, property type distribution
- **Recent Activity**: Real-time updates on latest activities
- **Interactive Charts**: Line charts, pie charts, and area charts using Recharts

### 🏘️ Properties Management
- **CRUD Operations**: Add, edit, delete, and view properties
- **Advanced Filtering**: Filter by property type, status, location
- **Search Functionality**: Search properties by title or location
- **Property Details**: Images, pricing, specifications, agent assignment
- **Status Tracking**: For Sale, For Rent, Sold, Rented

### 👥 Clients Management
- **Client Database**: Comprehensive client information storage
- **Client Types**: Buyers, Sellers, Investors, Renters
- **Contact Information**: Email, phone, preferences, budget
- **Status Management**: Active, Inactive, Prospect
- **Agent Assignment**: Link clients to specific agents

### 👨‍💼 Agents Management
- **Staff Directory**: Complete agent profiles and information
- **Performance Tracking**: Sales metrics, ratings, property count
- **Position Management**: Senior Agent, Agent, Junior Agent, Intern
- **Status Tracking**: Active, Inactive, On Leave

### 📞 Inquiries/Leads Management
- **Lead Tracking**: Capture and manage customer inquiries
- **Priority System**: High, Medium, Low priority levels
- **Status Workflow**: New, In Progress, Resolved, Closed
- **Property Association**: Link inquiries to specific properties
- **Agent Assignment**: Assign inquiries to appropriate agents

### 📈 Reports & Analytics
- **Sales Analytics**: Monthly sales trends and revenue analysis
- **Performance Metrics**: Agent performance comparison
- **Property Analytics**: Top performing properties
- **Inquiry Trends**: Customer inquiry patterns
- **Export Functionality**: Download reports in various formats

### ⚙️ Settings & Configuration
- **Company Information**: Business details and contact information
- **User Profile Management**: Admin user settings and preferences
- **Notification Settings**: Email, SMS, and system notifications
- **Appearance Settings**: Theme, language, timezone preferences
- **Security Settings**: Password change, two-factor authentication

## 🛠️ Technology Stack

- **Frontend**: React 18
- **UI Framework**: Material-UI (MUI) v5
- **Charts**: Recharts
- **Routing**: React Router DOM v6
- **Icons**: Material Icons
- **Styling**: Emotion (CSS-in-JS)
- **Form Handling**: Formik & Yup (ready for implementation)
- **HTTP Client**: Axios (ready for backend integration)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zanzpalm-admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📱 Responsive Design

The admin panel is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Material Design principles
- **Color Scheme**: Custom purple gradient theme (#667eea to #764ba2)
- **Typography**: Roboto font family for optimal readability
- **Icons**: Material Icons for consistent visual language
- **Cards**: Elevated cards with subtle shadows and rounded corners
- **Interactive Elements**: Hover effects and smooth transitions

## 🔧 Customization

### Theme Customization
The theme can be easily customized in `src/App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea', // Change primary color
    },
    secondary: {
      main: '#764ba2', // Change secondary color
    },
  },
  // ... other theme options
});
```

### Adding New Features
The modular structure makes it easy to add new features:
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Update routing in `src/App.js`

## 📊 Data Management

Currently, the application uses mock data for demonstration. To integrate with a backend:

1. Replace mock data with API calls using Axios
2. Implement proper state management (Redux, Context API, or Zustand)
3. Add authentication and authorization
4. Implement real-time updates using WebSockets

## 🔒 Security Considerations

For production deployment:
- Implement proper authentication (JWT, OAuth)
- Add role-based access control
- Secure API endpoints
- Enable HTTPS
- Implement input validation and sanitization
- Add rate limiting
- Regular security audits

## 📈 Performance Optimization

- Lazy loading for components
- Image optimization
- Code splitting
- Memoization for expensive calculations
- Efficient re-rendering with React.memo

## 🧪 Testing

The project includes testing setup with:
- Jest for unit testing
- React Testing Library for component testing
- Ready for integration testing

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Heroku**: Deploy using Heroku CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@zanzpalm.com
- Phone: +255 123 456 789
- Website: www.zanzpalm.com

## 🔮 Future Enhancements

- **Real-time Notifications**: WebSocket integration for live updates
- **Advanced Analytics**: More detailed reporting and insights
- **Mobile App**: React Native companion app
- **Multi-language Support**: Internationalization (i18n)
- **Advanced Search**: Elasticsearch integration
- **Document Management**: File upload and management
- **Calendar Integration**: Viewing schedules and appointments
- **Email Marketing**: Newsletter and campaign management
- **Payment Integration**: Online payment processing
- **API Documentation**: Swagger/OpenAPI documentation

---

**Built with ❤️ for Zanzpalm Real Estate**
