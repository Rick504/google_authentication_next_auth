import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import UserDashboard from './UserDashboard';
import { SessionGoole } from '../interfaces/user';

export default async function Dashboard() {
  const session: SessionGoole | null = await getServerSession();

  if (!session) {
    return redirect('/');
  }

  return <UserDashboard user={session.user} />;
}
