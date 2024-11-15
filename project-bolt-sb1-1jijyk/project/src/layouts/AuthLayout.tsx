import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export function AuthLayout() {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}