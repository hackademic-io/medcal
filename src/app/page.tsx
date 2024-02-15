import MainPage from '@/components/Main/MainPage';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  return (
    <div className="h-full w-full">
      <MainPage />
    </div>
  );
}
