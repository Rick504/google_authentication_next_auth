import UserDashboard from './UserDashboard';
import { getUserInfo } from '../services/userService';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('x-access-token')?.value;
  const { data } = await getUserInfo(token ?? '');
  if (!data) return redirect('/');

  return <UserDashboard user={data} />;
}
