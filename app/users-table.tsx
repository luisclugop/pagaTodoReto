'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SelectUser } from '@/lib/db';
import { deleteUser } from './actions';

export function UsersTable(data: any) {

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Nombre Banco</TableHead>
              <TableHead className="hidden md:table-cell">Descripcion</TableHead>
              <TableHead className="hidden md:table-cell">Url</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((dataBank: any) => (
              <UserRow key={dataBank.age} dataBank={dataBank} />
            ))}
          </TableBody>
        </Table>
      </form>
    </>
  );
}

function UserRow({ dataBank }: { dataBank: any }) {
  const dataBankId = dataBank.age;
  const deleteUserWithId = deleteUser.bind(null, dataBankId);

  return (
    <TableRow>
      <TableCell className="font-medium">{dataBank.bankName}</TableCell>
      <TableCell className="hidden md:table-cell">{dataBank.description}</TableCell>
      <TableCell>{dataBank.url}</TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          formAction={deleteUserWithId}
          
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
