import PayCard from '@/components/PayCard';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-between">
      <main>
        <PayCard />
      </main>

      <footer className="font-bold mb-4">Pay Link @ 2025</footer>
    </div>
  );
}
