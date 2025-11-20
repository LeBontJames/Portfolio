// Error boundary component
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold" style={{ color: 'var(--primary-cyan)' }}>
          Something went wrong!
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <button 
          onClick={reset}
          style={{
            background: 'linear-gradient(135deg, var(--primary-cyan), var(--primary-purple))',
            color: 'var(--darker-bg)',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
