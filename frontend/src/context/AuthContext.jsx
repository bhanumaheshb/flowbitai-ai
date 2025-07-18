import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const API_BASE_URL = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth) {
          setUser(auth.user);
        }
      } catch (err) {
        console.error("Auth initialization error:", err);
        logout();
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const fetchScreens = useCallback(async (token) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/me/screens`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // You can process or store `data` if needed
    } catch (err) {
      console.error("Failed to fetch screens:", err);
      setError(err.response?.data?.message || 'Failed to load screens');
    }
  }, []);

  const register = async (userData) => {
    try {
      setError(null);
      const { data } = await axios.post(`${API_BASE_URL}/users/register`, userData);

      const userInfo = {
        id: data.user.id,
        name: data.user.name,
        email: userData.email,
        role: data.user.role,
        customerId: data.user.customerId,
        token: data.token
      };

      localStorage.setItem('auth', JSON.stringify({ user: userInfo, token: data.token }));
      setUser(userInfo);
      await fetchScreens(data.token);

      navigate(userInfo.role === 'admin' ? '/admin/dashboard' : '/dashboard');
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  const providerLogin = async (credentials) => {
    try {
      setError(null);
      const { data } = await axios.post(`${API_BASE_URL}/users/login`, credentials);

      const userInfo = {
        id: data.user.id,
        name: data.user.name,
        email: credentials.email,
        role: data.user.role,
        customerId: data.user.customerId,
        token: data.token
      };

      localStorage.setItem('auth', JSON.stringify({ user: userInfo, token: data.token }));
      setUser(userInfo);
      await fetchScreens(data.token);

      navigate(userInfo.role === 'admin' ? '/admin/dashboard' : '/dashboard');
      return data;
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setUser(null);
    navigate('/login');
  };

  const value = {
    user,
    loading,
    error,
    login: providerLogin,
    register,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// ✅ Standalone login function (outside component)
export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/users/login`, {
      email,
      password
    });
    return res.data;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};
