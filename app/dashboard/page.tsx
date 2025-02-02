import UserDashboard from './UserDashboard';
import { getUserInfo } from '../services/userService';
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('x-access-token')?.value;
  const { data } = await getUserInfo(token ?? '');

  return <UserDashboard user={data} />;
}
