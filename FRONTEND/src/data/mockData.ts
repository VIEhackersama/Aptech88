

export const mockAppointments = [
  {
    appt_id: "A001",
    pet_id: "P001",
    owner_id: "O001",
    vet_id: "V001",
    appointment_time: "2025-09-15T10:30:00Z",
    status: "Scheduled",
  },
  {
    appt_id: "A002",
    pet_id: "P002",
    owner_id: "O002",
    vet_id: "V001",
    appointment_time: "2025-09-16T14:00:00Z",
    status: "Completed",
  },
  {
    appt_id: "A003",
    pet_id: "P003",
    owner_id: "O003",
    vet_id: "V002",
    appointment_time: "2025-09-17T09:00:00Z",
    status: "Cancelled",
  },
];

export const mockHealthRecords = [
  {
    record_id: "R001",
    pet_id: "P001",
    vet_id: "V001",
    visit_date: "2025-09-01",
    diagnosis: "Viêm da nhẹ",
    treatment: "Thuốc mỡ bôi ngoài da trong 7 ngày",
  },
  {
    record_id: "R002",
    pet_id: "P002",
    vet_id: "V001",
    visit_date: "2025-08-28",
    diagnosis: "Sốt virus",
    treatment: "Tiêm hạ sốt, truyền dịch 2 ngày",
  },
  {
    record_id: "R003",
    pet_id: "P003",
    vet_id: "V002",
    visit_date: "2025-08-20",
    diagnosis: "Viêm đường hô hấp",
    treatment: "Kháng sinh và vitamin C trong 5 ngày",
  },
];
