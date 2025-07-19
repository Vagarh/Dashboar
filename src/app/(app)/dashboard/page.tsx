"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeartPulse, Flame, Footprints } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { Activity } from '@/lib/types';

const healthData = [
  { day: 'Mon', steps: 4200, calories: 300 },
  { day: 'Tue', steps: 5300, calories: 350 },
  { day: 'Wed', steps: 3800, calories: 280 },
  { day: 'Thu', steps: 7800, calories: 500 },
  { day: 'Fri', steps: 6100, calories: 420 },
  { day: 'Sat', steps: 10500, calories: 750 },
  { day: 'Sun', steps: 8200, calories: 550 },
];

const chartConfig = {
  steps: { label: 'Steps', color: 'hsl(var(--primary))' },
  calories: { label: 'Calories', color: 'hsl(var(--accent))' },
};

const recentActivities: Activity[] = [
  { id: '1', type: 'Workout', description: 'Morning Run', value: '5 km', date: '2024-07-23' },
  { id: '2', type: 'Vitals', description: 'Blood Pressure', value: '120/80 mmHg', date: '2024-07-23' },
  { id: '3', type: 'Meditation', description: '10 min Mindfulness', value: '10 min', date: '2024-07-22' },
  { id: '4', type: 'Workout', description: 'Gym Session', value: '1.5 hours', date: '2024-07-22' },
  { id: '5', type: 'Meal', description: 'Healthy Lunch', value: '450 kcal', date: '2024-07-21' },
];

export default function DashboardPage() {
  const avgHeartRate = 72;
  const caloriesBurned = 2345;
  const activeHours = 2.5;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Heart Rate</CardTitle>
            <HeartPulse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgHeartRate} <span className="text-sm font-normal text-muted-foreground">bpm</span></div>
            <p className="text-xs text-muted-foreground">Resting heart rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caloriesBurned.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Hours</CardTitle>
            <Footprints className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeHours}h</div>
            <p className="text-xs text-muted-foreground">Goal: 3h</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
          <CardDescription>Your steps and calories burned over the last week.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={healthData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} stroke="var(--color-steps)" />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} stroke="var(--color-calories)" />
              <Tooltip
                cursor={true}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Line yAxisId="left" type="monotone" dataKey="steps" stroke="var(--color-steps)" strokeWidth={2} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="calories" stroke="var(--color-calories)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                   <TableCell>
                    <Badge variant={activity.type === 'Workout' ? 'default' : 'secondary'}>
                      {activity.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{activity.description}</TableCell>
                  <TableCell>{activity.value}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
