import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FileText, MoreVertical, PlusCircle } from 'lucide-react';
import type { Invoice } from '@/lib/types';

const invoices: Invoice[] = [
  { id: '1', invoiceNumber: 'INV-001', customer: { name: 'Acme Inc.', email: 'contact@acme.com' }, date: '2024-06-01', dueDate: '2024-07-01', amount: 2500, status: 'Paid' },
  { id: '2', invoiceNumber: 'INV-002', customer: { name: 'Stark Industries', email: 'tony@stark.com' }, date: '2024-06-15', dueDate: '2024-07-15', amount: 10000, status: 'Sent' },
  { id: '3', invoiceNumber: 'INV-003', customer: { name: 'Wayne Enterprises', email: 'bruce@wayne.com' }, date: '2024-05-20', dueDate: '2024-06-20', amount: 5000, status: 'Overdue' },
  { id: '4', invoiceNumber: 'INV-004', customer: { name: 'Cyberdyne Systems', email: 'info@cyberdyne.com' }, date: '2024-06-23', dueDate: '2024-07-23', amount: 1200, status: 'Draft' },
];

const getStatusVariant = (status: Invoice['status']): 'default' | 'secondary' | 'destructive' | 'outline' => {
  switch (status) {
    case 'Paid':
      return 'secondary';
    case 'Sent':
      return 'default';
    case 'Overdue':
      return 'destructive';
    case 'Draft':
      return 'outline';
  }
};

export default function InvoicesPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle>Invoices</CardTitle>
          <p className="text-sm text-muted-foreground">Manage and track all your customer invoices.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                <TableCell>{invoice.customer.name}</TableCell>
                <TableCell className="text-right">${invoice.amount.toLocaleString()}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={getStatusVariant(invoice.status)}>{invoice.status}</Badge>
                </TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
