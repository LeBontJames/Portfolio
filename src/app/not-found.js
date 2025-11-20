import Link from 'next/link';

// 404 metadata
export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-4 font-bold" style={{ fontSize: '6rem', color: 'var(--primary-cyan)' }}>
          404
        </h1>
        <h2 className="mb-4 text-3xl font-bold" style={{ color: 'var(--primary-cyan)' }}>
          Page Not Found
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Link 
          href="/"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--primary-cyan), var(--primary-purple))',
            color: 'var(--darker-bg)',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
