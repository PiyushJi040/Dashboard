# 🌌 Nebula Dashboard

A stunning full-stack analytics dashboard featuring a premium dark theme with glassmorphism effects, animated gradients, and interactive data visualizations.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)
![Material-UI](https://img.shields.io/badge/MUI-5.x-007FFF?style=for-the-badge&logo=mui)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)

## ✨ Features

- 🎨 **Premium Dark Theme** - Glassmorphism design with vibrant gradient accents
- 📊 **Interactive Charts** - Beautiful data visualizations using Nivo
- 🎭 **Smooth Animations** - Fluid transitions and 60fps hover effects
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **High Performance** - Optimized rendering and animations
- 🔐 **Role-Based Dashboards** - Separate User and Admin interfaces
- 📈 **Real-Time Analytics** - Sales, customers, and transaction tracking
- 🎯 **Modern UI/UX** - Clean, professional, and engaging interface

## 🎨 Design Highlights

- ✨ Animated gradient backgrounds
- 💎 Glassmorphism card effects
- 🌈 Custom gradient scrollbars
- 🎭 Staggered loading animations
- 📝 Gradient text effects
- ✨ Glowing hover states
- 🎨 Custom StatCard component

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - Component library
- **Redux Toolkit** - State management
- **Nivo Charts** - Data visualization
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **RESTful API** - Backend architecture

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- Git installed

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PiyushJi040/Dashboard.git
cd Dashboard
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install server dependencies**
```bash
cd ../server
npm install
```

4. **Set up environment variables**

Create a `.env` file in the `server` directory:
```env
PORT=5001
MONGO_URL=your_mongodb_connection_string
```

5. **Run the application**

**Development mode:**
```bash
# Terminal 1 - Run server
cd server
npm run dev

# Terminal 2 - Run client
cd client
npm start
```

**Production mode:**
```bash
# Build client
cd client
npm run build

# Run server
cd ../server
npm start
```

## 📁 Project Structure

```
Dashboard/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable components
│   │   │   ├── StatCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── scenes/        # Page components
│   │   │   ├── dashboard/
│   │   │   ├── products/
│   │   │   ├── customers/
│   │   │   └── ...
│   │   ├── state/         # Redux store
│   │   ├── theme.js       # MUI theme configuration
│   │   ├── index.css      # Global styles
│   │   └── App.js         # Main app component
│   └── package.json
│
└── server/                # Node.js backend
    ├── controllers/       # Route controllers
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    ├── data/             # Seed data
    ├── index.js          # Server entry point
    └── package.json
```

## 🎯 Available Pages

- **User Dashboard** - Overview with stats and charts
- **Admin Dashboard** - Advanced analytics and user management
- **Products** - Product catalog with search and filters
- **Customers** - Customer management interface
- **Transactions** - Transaction history and details
- **Overview** - Sales overview and trends
- **Monthly** - Monthly sales reports
- **Breakdown** - Sales breakdown by category/region

## 🎨 Theme Customization

The theme is fully customizable in `client/src/theme.js`:

```javascript
// Customize colors
primary: { main: '#6366f1' }
secondary: { main: '#d946ef' }
success: { main: '#10b981' }
// ... and more
```

## 📊 API Endpoints

### Client Routes
- `GET /api/client/products` - Get all products
- `GET /api/client/customers` - Get all customers
- `GET /api/client/transactions` - Get transactions

### Sales Routes
- `GET /api/sales/overview` - Get sales overview
- `GET /api/sales/monthly` - Get monthly sales

### Management Routes
- `GET /api/management/admins` - Get admin users

## 🚀 Deployment

### Deploy Frontend (Vercel/Netlify)

1. Build the client:
```bash
cd client
npm run build
```

2. Deploy the `build` folder to Vercel or Netlify

### Deploy Backend (Render/Railway)

1. Push code to GitHub
2. Connect your repository to Render/Railway
3. Set environment variables
4. Deploy

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5001
MONGO_URL=your_production_mongodb_url
CLIENT_URL=your_frontend_url
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Piyush Ji**
- GitHub: [@PiyushJi040](https://github.com/PiyushJi040)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📸 Screenshots

[Add your dashboard screenshots here]

## 🙏 Acknowledgments

- Material-UI for the component library
- Nivo for beautiful charts
- React community for amazing tools

---

**Made with ❤️ and lots of ☕**
