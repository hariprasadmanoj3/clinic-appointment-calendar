const APPOINTMENTS_KEY = 'clinic_appointments';

export const saveAppointments = (appointments) => {
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
};

export const loadAppointments = () => {
  const stored = localStorage.getItem(APPOINTMENTS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addAppointment = (appointment) => {
  const appointments = loadAppointments();
  const newAppointment = {
    ...appointment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  appointments.push(newAppointment);
  saveAppointments(appointments);
  return newAppointment;
};

export const updateAppointment = (appointmentId, updatedAppointment) => {
  const appointments = loadAppointments();
  const index = appointments.findIndex(apt => apt.id === appointmentId);
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...updatedAppointment };
    saveAppointments(appointments);
    return appointments[index];
  }
  return null;
};

export const deleteAppointment = (appointmentId) => {
  const appointments = loadAppointments();
  const filtered = appointments.filter(apt => apt.id !== appointmentId);
  saveAppointments(filtered);
  return filtered;
};