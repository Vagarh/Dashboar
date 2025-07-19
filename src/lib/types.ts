export interface Invoice {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'Paid' | 'Draft' | 'Sent' | 'Overdue';
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  avatarUrl?: string;
}

export interface Appointment {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'Revenue' | 'Expense';
}
