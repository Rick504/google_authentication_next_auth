import { redirect } from 'next/navigation';
import UserDashboard from './UserDashboard';
import { getServerSession } from 'next-auth';
import { SessionGoole } from '../types/user';

export default async function Dashboard() {
  const session: SessionGoole | null = await getServerSession();
  if (!session) return redirect('/');
  return <UserDashboard user={session.user} />;
}
