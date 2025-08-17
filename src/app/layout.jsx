import { ubuntu } from "@/ui/fonts";
import '@/app/globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.className} background-gradient h-screen`}>
        {children}
      </body>
    </html>
  );
}
