import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/Register';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import AdminDashboard from './pages/AdminDashboard'; // create this page
import AdminLogin from './pages/adminlogin';
// ✅ Admin-only route wrapper
function AdminRoute({ children }) {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }
  return children;
}

// ✅ Home Page Component
function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden mx-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-blue-50">
            <img
              src="https://illustrations.popsy.co/amber/digital-nomad.svg"
              alt="AI Illustration"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-blue-600">FlowbitAI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              The smart way to automate your logistics operations with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/login')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Main App Router (NO <Router> here)
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/support-tickets" element={<Tickets />} />
      <Route path="/tickets/:id" element={<TicketDetail />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      {/* ✅ Admin-only route */}
      <Route 
        path="/admin/dashboard" 
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } 
      />
    </Routes>
  );
}

export default App;
