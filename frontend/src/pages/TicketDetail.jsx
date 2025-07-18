import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TicketDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Issue Resolved</h1>
        <p className="text-gray-700 mb-6">Ticket ID: {id}</p>
        <Link
          to="/support-tickets"
          className="text-blue-600 hover:underline"
        >
          Back to Tickets
        </Link>
      </div>
    </div>
  );
};

export default TicketDetail;
