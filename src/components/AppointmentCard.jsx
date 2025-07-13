import React from 'react';
import { doctors, patients } from '../data/mockData';
import { formatTime } from '../utils/dateUtils';

const AppointmentCard = ({ appointment, onClick, onDelete }) => {
  const doctor = doctors.find(d => d.id === parseInt(appointment.doctorId));
  const patient = patients.find(p => p.id === parseInt(appointment.patientId));

  return (
    <div className="appointment-card" onClick={onClick}>
      <div className="appointment-time">{formatTime(appointment.time)}</div>
      <div className="appointment-patient">{patient?.name}</div>
      <div className="appointment-doctor">Dr. {doctor?.name}</div>
      {onDelete && (
        <button 
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(appointment.id);
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default AppointmentCard;