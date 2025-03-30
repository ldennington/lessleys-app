"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function Onboarding() {
  const { user } = useUser();
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState(''); // Add error state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.id,
          birthdate,
          city,
          state,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('API Response:', data);
      router.push('/organization');
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };
  
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  return (
    <div>
        <div className="flex justify-center py-24">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-10">
            <h1 className="text-xl font-bold text-black mb-6 text-center font-sans">Onboarding</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1 font-sans text-black">
                Birthdate
                </label>
                <input
                type="date"
                value={birthdate}
                onChange={(e) => {
                    const selectedDate = e.target.value;
                    setBirthdate(selectedDate);
              
                    const birthdateDate = new Date(selectedDate);
                    const today = new Date();
                    const fifteenYearsAgo = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());
              
                    if (birthdateDate >= fifteenYearsAgo) {
                      setError('You must be at least 15 years old to use this application.');
                    } else {
                      setError('');
                    }
                  }}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black font-sans"
                style={{ color: 'rgb(116, 118, 134)' }}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 font-sans"
                style={{ color: 'rgb(116, 118, 134)' }}>
                City
                </label>
                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-sans"
                style={{ color: 'rgb(116, 118, 134)' }}
                placeholder="Enter your city"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-black mb-1 font-sans">
                State
                </label>
                <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-sans text-black"
                style={{ color: 'rgb(116, 118, 134)' }}
                >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                    <option key={state} value={state}>
                    {state}
                    </option>
                ))}
                </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md font-sans hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
              style={{ cursor: 'pointer' }}
            >
              Continue
            </button>
            </form>
        </div>
        </div>
    </div>
  );
}
