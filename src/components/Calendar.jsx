import React, { useState, useEffect } from 'react';
import { getMonthDays, isToday, formatDate } from '../utils/dateUtils';
import { loadAppointments, addAppointment, updateAppointment, deleteAppointment } from '../utils/localStorage';
import AppointmentCard from './AppointmentCard';
import AppointmentForm from './AppointmentForm';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setAppointments(loadAppointments());
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const monthDays = getMonthDays(currentDate.getFullYear(), currentDate.getMonth());
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getAppointmentsForDate = (date) => {
    if (!date) return [];
    const dateString = formatDate(date);
    return appointments.filter(apt => apt.date === dateString);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleSaveAppointment = (appointmentData) => {
    if (editingAppointment) {
      updateAppointment(editingAppointment.id, appointmentData);
    } else {
      addAppointment(appointmentData);
    }
    setAppointments(loadAppointments());
    setEditingAppointment(null);
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment);
    setShowForm(true);
  };

  const handleDeleteAppointment = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      deleteAppointment(appointmentId);
      setAppointments(loadAppointments());
    }
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  if (isMobile) {
    return (
      <div className="calendar-container mobile">
        <header className="calendar-header">
          <h1>Appointment Calendar</h1>
          <input
            type="date"
            value={formatDate(currentDate)}
            onChange={(e) => setCurrentDate(new Date(e.target.value))}
            className="date-picker"
          />
          <button 
            className="add-appointment-btn"
            onClick={() => {
              setSelectedDate(currentDate);
              setShowForm(true);
            }}
          >
            + Add Appointment
          </button>
        </header>

        <div className="mobile-day-view">
          <h2>{currentDate.toDateString()}</h2>
          <div className="appointments-list">
            {getAppointmentsForDate(currentDate).map(appointment => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onClick={() => handleEditAppointment(appointment)}
                onDelete={handleDeleteAppointment}
              />
            ))}
            {getAppointmentsForDate(currentDate).length === 0 && (
              <p className="no-appointments">No appointments scheduled</p>
            )}
          </div>
        </div>

        <AppointmentForm
          isOpen={showForm}
          onClose={() => {
            setShowForm(false);
            setEditingAppointment(null);
          }}
          onSave={handleSaveAppointment}
          selectedDate={selectedDate}
          editingAppointment={editingAppointment}
        />
      </div>
    );
  }

  return (
    <div className="calendar-container desktop">
      <header className="calendar-header">
        <div className="calendar-nav">
          <button onClick={() => navigateMonth(-1)}>‹</button>
          <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <button onClick={() => navigateMonth(1)}>›</button>
        </div>
        <button onClick={goToToday} className="today-btn">Today</button>
      </header>

      <div className="calendar-grid">
        <div className="calendar-header-row">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-header-cell">{day}</div>
          ))}
        </div>
        
        {Array.from({ length: Math.ceil(monthDays.length / 7) }, (_, weekIndex) => (
          <div key={weekIndex} className="calendar-week">
            {monthDays.slice(weekIndex * 7, (weekIndex + 1) * 7).map((date, dayIndex) => (
              <div
                key={dayIndex}
                className={`calendar-day ${date ? '' : 'empty'} ${date && isToday(date) ? 'today' : ''}`}
                onClick={() => date && handleDayClick(date)}
              >
                {date && (
                  <>
                    <div className="day-number">{date.getDate()}</div>
                    <div className="day-appointments">
                      {getAppointmentsForDate(date).map(appointment => (
                        <AppointmentCard
                          key={appointment.id}
                          appointment={appointment}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAppointment(appointment);
                          }}
                          onDelete={handleDeleteAppointment}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <AppointmentForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingAppointment(null);
        }}
        onSave={handleSaveAppointment}
        selectedDate={selectedDate}
        editingAppointment={editingAppointment}
      />
    </div>
  );
};

export default Calendar;