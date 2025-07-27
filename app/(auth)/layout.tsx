import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        TEST TEXT AUTH
        {children}
      </body>
    </html>
  );
}
