import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { SessionGoole } from '../interfaces/user';
import { AuthProviderGoogle } from '../interfaces/auth';
import { authService } from '@/app/services/authGoogleService';
import UserDashboard from './UserDashboard';

export default async function Dashboard() {
  const session: SessionGoole | null = await getServerSession();
  if (!session) return redirect('/');

  const authProviderGoogle: AuthProviderGoogle = {
    provider: 'google',
    idTokenGoogle: process.env.GOOGLE_ID || '',
    ...session,
  };

  const { user, token } = await authService.authenticateWithGoogle(
    authProviderGoogle
  );
  user.token = token;
  return <UserDashboard user={user} />;
}
