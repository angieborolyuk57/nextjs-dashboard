import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <p className={`${lusitana.className}`}>This is the customers page</p>
    </main>
  );
}
