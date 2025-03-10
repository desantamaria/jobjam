import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#eee2fe] bg-gradient-to-b from-[#d7cfe2] to-[#ddd7e6] p-4 sm:p-8">
      <main className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Jobjam</h1>
          {false ? <Button asChild>Sign In</Button> : <Button>Sign Out</Button>}
        </div>
      </main>
    </div>
  );
}
