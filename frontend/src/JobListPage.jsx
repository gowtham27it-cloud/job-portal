'use client';
import { useEffect, useState } from 'react';

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/jobs/')
      .then(res => res.json())
      .then(setJobs)
      .catch(err => console.error('Failed to fetch jobs:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-blue-700">JobPortal</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-700">Jobs</a>
            <a href="#" className="hover:text-blue-700">Companies</a>
            <a href="#" className="hover:text-blue-700">Services</a>
            <a href="#" className="hover:text-blue-700">Login</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto w-full max-w-7xl px-6 py-8 flex-1">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Recommended Jobs</h2>
          <p className="mt-1 text-sm text-gray-500">Jobs based on your profile and preferences</p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <p className="text-gray-500">No jobs found.</p>
          ) : (
            jobs.map(job => (
              <div key={job.id} className="rounded-lg border bg-white p-5 transition hover:shadow-md">
                <h3 className="text-lg font-semibold text-blue-700">{job.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{job.company}</p>

                <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="rounded bg-gray-100 px-2 py-1">📍 {job.location}</span>
                  <span className="rounded bg-gray-100 px-2 py-1">💰 {job.salary_range || 'Not Disclosed'}</span>
                  <span className="rounded bg-gray-100 px-2 py-1">🕒 Full Time</span>
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="text-sm font-medium text-blue-700 hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          © 2026 JobPortal.com | All rights reserved
        </div>
      </footer>
    </div>
  );
}