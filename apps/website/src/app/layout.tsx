import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import {
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Treasure Chest Tracker",
    default: "Treasure Chest Tracker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className)}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="p-4 pt-0">{children}</main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
