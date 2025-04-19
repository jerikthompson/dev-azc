import ChartExample from '@/components/ChartExample';
import ChartExample2 from '@/components/ChartExample2';
import RowCountDisplay from '@/components/RowCountDisplay';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Sample Stats</h1>
        <div className='flex flex-row'>
          <ChartExample />
          &nbsp;
          <ChartExample2 />
        </div>
        <div className='w-full max-w-md'>
          <RowCountDisplay />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">Created with Next.js and Tremor</p>
      </footer>
  </div>
);
}
