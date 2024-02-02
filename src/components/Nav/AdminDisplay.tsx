import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface AdminDisplayProps {
  handleLogOut: () => void;
}

const AdminDisplay: React.FC<AdminDisplayProps> = ({ handleLogOut }) => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4">
      {pathname === '/profile' ? null : (
        <Link href="/profile" className="blue_btn">
          Manage appointments
        </Link>
      )}

      <button onClick={handleLogOut} className="outline_btn">
        Log out
      </button>
    </div>
  );
};

export default AdminDisplay;
