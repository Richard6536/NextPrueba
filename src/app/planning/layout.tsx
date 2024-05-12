import { MapProvider } from "@/context/map/MapProvider";
import { Navbar } from "./components/navbar/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <MapProvider>
          <div className="flex h-[100vh] flex-col">
            <Navbar />  
            <div className="flex h-full w-full flex-col sm:pl-14">
              { children }
            </div>
          </div>
        </MapProvider>
    );
  }
  