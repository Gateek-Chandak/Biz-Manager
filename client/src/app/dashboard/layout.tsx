import Navbar from "./components/Navbar";
import ClientContextProvider from "./contexts/clientContext";
import "../globals.css"

export default function DashboardLayout({ children }: {children: React.ReactNode;}) {
  return (
        <section className="flex flex-row">
          <Navbar />
          <ClientContextProvider>
            {children}
          </ClientContextProvider>
        </section>
  );
}
