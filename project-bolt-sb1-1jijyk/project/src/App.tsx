import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthLayout } from './layouts/AuthLayout';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { CarsListPage } from './pages/cars/CarsListPage';
import { CarCreatePage } from './pages/cars/CarCreatePage';
import { CarDetailPage } from './pages/cars/CarDetailPage';
import { CarEditPage } from './pages/cars/CarEditPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<CarsListPage />} />
            <Route path="/cars/new" element={<CarCreatePage />} />
            <Route path="/cars/:id" element={<CarDetailPage />} />
            <Route path="/cars/:id/edit" element={<CarEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;