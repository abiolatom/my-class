
import Link from 'next/link';



export function Register() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block"> Register </span>
      
    </Link>
  );
}

export function CreateStudyPlan() {
  return (
    <Link
    href={`/dashboard/invoices/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
    
    </Link>
  );
}

