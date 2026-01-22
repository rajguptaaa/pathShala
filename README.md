# Patshala - AI-Powered Language Learning App

A modern, responsive language learning platform built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light theme toggle
- 🤖 **AI-Powered Learning** - Intelligent tutoring and personalized lessons
- 📊 **Interactive Dashboard** - Track progress, stats, and achievements
- 💬 **Chat Interface** - Practice with AI conversation partner
- 🎯 **Adaptive Lessons** - Personalized learning modules
- 👤 **User Profiles** - Comprehensive user management
- 📱 **Responsive Design** - Works perfectly on all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ⚡ **Fast Performance** - Built with Vite for optimal speed

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd patshala
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Landing.jsx     # Landing page
│   ├── Auth.jsx        # Login/Signup page
│   ├── Dashboard.jsx   # User dashboard
│   ├── Lessons.jsx     # Lessons page
│   ├── Chat.jsx        # AI chat interface
│   ├── Profile.jsx     # User profile
│   └── Contact.jsx     # Contact page
├── context/            # React contexts
│   ├── ThemeContext.jsx # Theme management
│   └── AuthContext.jsx  # Authentication
├── hooks/              # Custom hooks
├── utils/              # Utility functions
└── assets/             # Static assets
```

## Features Overview

### 🏠 Landing Page
- Hero section with compelling CTA
- Feature highlights
- Responsive design matching the provided mockup

### 🔐 Authentication
- Login/Signup forms
- Form validation
- Smooth animations

### 📊 Dashboard
- Learning progress visualization
- Statistics and achievements
- Upcoming lessons
- Personalized welcome

### 📚 Lessons
- Filterable lesson catalog
- Progress tracking
- Difficulty levels
- Interactive lesson cards

### 💬 AI Chat
- Real-time conversation interface
- Voice recording capability
- Text-to-speech functionality
- Quick action buttons

### 👤 Profile
- Editable user information
- Learning statistics
- Achievement system
- Progress charts

### 📞 Contact
- Contact form with validation
- Contact information
- FAQ section

## Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## Backend Integration

The app is designed to be easily connected to a backend API. Key integration points:

- Authentication: Update `AuthContext.jsx`
- User data: Modify user state management
- Lessons: Connect to lesson API endpoints
- Chat: Integrate with AI service
- Progress: Sync with backend database

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.