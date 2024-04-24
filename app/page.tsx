import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
// import { Search } from './search'; 

async function getData() {
  const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks') 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  } 
  return res.json()
}

export default async function IndexPage() {
  // const search = searchParams.q ?? '';
  // const offset = searchParams.offset ?? 0;
  // const { users, newOffset } = await getUsers(search, Number(offset));
  const data = await getData()
  // console.log(data);
  

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Bancos</h1>
      </div>
      {/* <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div> */}
      <UsersTable data={data} />
    </main>
  );
}
