import NavbarController from "./components/NavbarController";
import ClientContextProvider from "./contexts/clientContext";
import "../globals.css"

export default function DashboardLayout({ children }: {children: React.ReactNode;}) {
  return (
        <section className="flex flex-row">
          <NavbarController />
          <ClientContextProvider>
            {children}
          </ClientContextProvider>
        </section>
  );
}
