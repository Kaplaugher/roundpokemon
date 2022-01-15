import { trpc } from '@/utils/trpc';

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounder?</div>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-200">1</div>
        <div className="p-8">vs</div>
        <div className="w-16 h-16 bg-red-200">2</div>
      </div>
    </div>
  );
}

export default Home;
