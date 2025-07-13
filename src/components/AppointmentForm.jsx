import React, { useState, useEffect } from 'react';
import { doctors, patients } from '../data/mockData';
import { formatDate } from '../utils/dateUtils';
import '../styles/AppointmentForm.css';

const AppointmentForm = ({ 
  isOpen, 
  onClose, 
  onSave, 
  selectedDate, 
  editingAppointment 
}) => {
  const [formData, setFormData] = useState({
    patientId: '',
    doctorId: '',
    time: '',
    date: selectedDate ? formatDate(selectedDate) : formatDate(new Date())
  });

  useEffect(() => {
    if (editingAppointment) {
      setFormData({
        patientId: editingAppointment.patientId,
        doctorId: editingAppointment.doctorId,
        time: editingAppointment.time,
        date: editingAppointment.date
      });
    } else if (selectedDate) {
      setFormData(prev => ({
        ...prev,
        date: formatDate(selectedDate)
      }));
    }
  }, [editingAppointment, selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      patientId: '',
      doctorId: '',
      time: '',
      date: selectedDate ? formatDate(selectedDate) : formatDate(new Date())
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{editingAppointment ? 'Edit Appointment' : 'Add New Appointment'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="patient">Patient:</label>
            <select
              id="patient"
              value={formData.patientId}
              onChange={(e) => setFormData(prev => ({ ...prev, patientId: e.target.value }))}
              required
            >
              <option value="">Select a patient</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Doctor:</label>
            <select
              id="doctor"
              value={formData.doctorId}
              onChange={(e) => setFormData(prev => ({ ...prev, doctorId: e.target.value }))}
              required
            >
              <option value="">Select a doctor</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleClose}>Cancel</button>
            <button type="submit">
              {editingAppointment ? 'Update' : 'Add'} Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;