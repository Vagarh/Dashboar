"use client";

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { Appointment } from '@/lib/types';

const appointments: Record<string, Appointment[]> = {
  '2024-07-15': [
    { id: '1', title: 'Team Meeting', startTime: '10:00 AM', endTime: '11:00 AM', description: 'Weekly sync-up' },
    { id: '2', title: 'Client Call - Acme Corp', startTime: '02:00 PM', endTime: '03:00 PM', description: 'Project kickoff' },
  ],
  '2024-07-22': [
    { id: '3', title: 'Dentist Appointment', startTime: '09:00 AM', endTime: '09:30 AM', description: 'Regular check-up' },
  ],
  '2024-08-01': [
      { id: '4', title: 'Product Launch Meeting', startTime: '11:00 AM', endTime: '12:30 PM', description: 'Final prep for launch' },
  ],
};

const formatDate = (date: Date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const selectedDateStr = date ? formatDate(date) : '';
  const selectedAppointments = appointments[selectedDateStr] || [];

  return (
    <div className="flex flex-col gap-6">
       <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
               <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-3"
                classNames={{
                  months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                  month: 'space-y-4',
                  caption_label: 'text-base font-medium',
                  nav_button: 'h-8 w-8',
                  day_cell: 'h-12 w-12 text-center text-sm p-0',
                  day: 'h-12 w-12',
                }}
                modifiers={{
                    hasEvent: Object.keys(appointments).map(dateStr => new Date(dateStr + 'T00:00:00'))
                }}
                modifiersStyles={{
                    hasEvent: {
                        position: 'relative',
                        fontWeight: 'bold'
                    }
                }}
                components={{
                    DayContent: ({ date }) => (
                      <>
                        {date.getDate()}
                        {Object.keys(appointments).includes(formatDate(date)) && (
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                      </>
                    ),
                  }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>
                {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Select a date'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {selectedAppointments.length > 0 ? (
                selectedAppointments.map(apt => (
                  <div key={apt.id} className="p-3 rounded-lg border bg-card hover:bg-secondary transition-colors">
                    <p className="font-semibold">{apt.title}</p>
                    <p className="text-sm text-muted-foreground">{apt.startTime} - {apt.endTime}</p>
                    <p className="text-sm mt-1">{apt.description}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                    <CardDescription>No appointments for this day.</CardDescription>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
