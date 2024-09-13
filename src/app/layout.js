import { DataContextProvider } from "@/context/DataContext";
import "./globals.css";
import { lora } from "./ui/fonts";

export const metadata = {
  title: "Bendición Santuario San Juan",
  description: "Un regalo para el mundo",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <DataContextProvider>
        {children}
        </DataContextProvider>
      </body>
    </html>
  );
}
