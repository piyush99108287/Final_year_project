import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { Navbar } from '../components/Navbar';

export function ProtectedLayout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}