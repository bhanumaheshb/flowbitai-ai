import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get('/api/tickets/admin/tickets', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTickets(res.data.tickets);
      } catch (err) {
        console.error('Failed to fetch tickets:', err);
      }
    };
    fetchTickets();
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Ticket Management</h1>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="grid gap-4">
          {tickets.map(ticket => (
            <div key={ticket._id} className="border p-4 rounded-lg bg-white shadow">
              <h3 className="text-xl font-semibold">{ticket.subject}</h3>
              <p className="text-gray-600">{ticket.description}</p>
              <p className="text-sm text-gray-400">From: {ticket.user.name} ({ticket.user.email})</p>
              <button className="mt-2 px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                Mark as Resolved
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
