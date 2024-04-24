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
import SortBy from 'sort-by'

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
            {data.data
            .filter((dataBank: any) => dataBank.bankName)
            .sort((a: any, b: any) => a.bankName.localeCompare(b.bankName))// Filtrar elementos con 'bankName' definido
            .map((dataBank: any) => (
              <UserRow key={dataBank.age} dataBank={dataBank} />
            ))
          }
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
      <TableCell className="font-medium"><a href={dataBank.url}>URL</a></TableCell>
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
