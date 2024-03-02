import ContactForm from "@/components/ContactForm";

  
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1>Welcome to Finnish Study Class</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
