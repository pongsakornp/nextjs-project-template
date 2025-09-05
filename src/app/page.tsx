import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight">Next.js + shadcn/ui Template</h1>
      <p className="text-muted-foreground">You can clone and start building.</p>
      <div className="flex gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  )
}

