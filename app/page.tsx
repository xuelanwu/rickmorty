import Link from "@/node_modules/next/link";

import CharactersPage from "./characters/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CharactersPage />
    </main>
  );
}
