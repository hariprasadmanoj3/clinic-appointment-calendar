# 🏥 Clinic Appointment Calendar

A modern, responsive appointment management system built for healthcare clinics with React. Features a professional dark mode, session persistence, and intuitive calendar interface optimized for both desktop and mobile devices.

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue?logo=css3)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 **Authentication System**
- Mock authentication with session persistence (24-hour expiration)
- Auto-login functionality on page refresh
- Secure logout with confirmation dialog
- Professional login interface with form validation

### 🌙 **Dark Mode Support**
- System preference detection
- Smooth theme transitions (0.3s)
- Theme persistence via localStorage
- Professional moon/sun toggle in header
- Complete dark theme coverage across all components

### 📅 **Calendar Management**
- **Desktop**: Full month view with appointment cards
- **Mobile**: Optimized day view for touch interaction
- Responsive design that adapts to screen size
- Intuitive navigation between months/days

### 👥 **Appointment Management**
- **Create** new appointments with patient and doctor selection
- **Edit** existing appointments with pre-filled forms
- **Delete** appointments with confirmation
- **View** appointment details in modal dialogs

### 💾 **Data Persistence**
- Local storage for appointments data
- Session state management
- Theme preference storage
- Automatic data recovery on page refresh

### 📱 **Responsive Design**
- Mobile-first approach
- Touch-friendly interface
- Optimized layouts for all screen sizes
- Professional UI/UX across devices

## 🎯 Demo

**Live Demo Credentials:**
- **Email**: `staff@clinic.com`
- **Password**: `123456`

**Try these features:**
1. Toggle between light and dark themes
2. Create appointments using the "+" button
3. Switch between desktop month view and mobile day view
4. Test session persistence by refreshing the page
5. Explore responsive design on different screen sizes

## 🛠 Tech Stack

- **Frontend Framework**: React 18.0+
- **Styling**: CSS3 with CSS Custom Properties
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Data Storage**: localStorage API
- **Date Handling**: JavaScript Date API with custom utilities
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/hariprasadmanoj3/clinic-appointment-calendar.git
cd clinic-appointment-calendar
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

5. **Build for production** (optional)
```bash
npm run build
# or
yarn build
```

## 🎮 Usage

### Getting Started
1. **Login**: Use the demo credentials or any email/password combination
2. **Navigate**: Use the calendar navigation to move between months/days
3. **Create Appointment**: Click the "+" button and fill out the form
4. **Edit/Delete**: Click on any appointment card to view options
5. **Theme Toggle**: Use the moon/sun icon in the header
6. **Logout**: Click your name in the header and confirm logout

### Key Interactions
- **Desktop**: Click and hover interactions optimized for mouse
- **Mobile**: Touch gestures and swipe navigation
- **Keyboard**: Full keyboard navigation support
- **Forms**: Real-time validation and error handling

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # User info, logout, theme toggle
│   ├── Login.jsx               # Authentication interface
│   ├── Calendar.jsx            # Main calendar component
│   ├── AppointmentForm.jsx     # Create/edit appointment modal
│   └── AppointmentCard.jsx     # Individual appointment display
├── hooks/
│   └── useAuth.js              # Authentication logic and state
├── utils/
│   ├── localStorage.js         # Data persistence utilities
│   └── dateUtils.js            # Date formatting and manipulation
├── data/
│   └── mockData.js             # Sample doctors and patients data
├── styles/
│   ├── App.css                 # Main application styles
│   ├── Header.css              # Header component styles
│   ├── Login.css               # Login interface styles
│   ├── Calendar.css            # Calendar layout and theming
│   ├── AppointmentForm.css     # Modal and form styles
│   └── AppointmentCard.css     # Appointment card styles
├── App.jsx                     # Root component
└── main.jsx                    # Application entry point
```

## 🎨 Design Features

### Color Scheme
- **Light Theme**: Clean whites, soft grays, professional blues
- **Dark Theme**: Rich blacks, muted grays, accent blues
- **Accessibility**: WCAG compliant contrast ratios

### Typography
- **Headers**: Clean, modern font stack
- **Body**: Optimized for readability
- **UI Elements**: Consistent sizing and spacing

### Animations
- **Theme Transitions**: 0.3s smooth transitions
- **Hover Effects**: Subtle interactive feedback
- **Modal Animations**: Professional slide-in effects

## 📱 Screenshots

*Add screenshots here showcasing:*
- Login interface (light/dark)
- Desktop calendar view
- Mobile day view
- Appointment creation modal
- Dark mode toggle
- Responsive layouts

## 🔮 Future Enhancements

### Planned Features
- **Filter System**: Filter appointments by doctor/patient
- **Search Functionality**: Find appointments quickly
- **Export Options**: PDF/CSV export capabilities
- **Print Support**: Print-friendly calendar views
- **Notifications**: Appointment reminders
- **Recurring Appointments**: Support for repeat bookings

### Technical Improvements
- **API Integration**: Connect to real backend
- **Database**: Replace localStorage with proper DB
- **Authentication**: JWT token-based auth
- **Testing**: Unit and integration tests
- **Performance**: Code splitting and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

### Development Guidelines
- Follow React best practices
- Maintain responsive design principles
- Ensure accessibility compliance
- Write clean, documented code
- Test on multiple devices/browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Inspired by real-world healthcare management needs
- Designed with accessibility and user experience in mind

---
