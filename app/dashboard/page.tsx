import UserDashboard from './UserDashboard';
import { getServerSession } from 'next-auth';
import { SessionGoole } from '../types/user';
import { getUserInfo } from '../services/userService';
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('x-access-token');
  const userInfo = await getUserInfo(token.value);
  console.log('userInfo:', userInfo);
  const session: SessionGoole | null = await getServerSession();
  if (session) {
    return <UserDashboard user={session.user} />;
  }
}
