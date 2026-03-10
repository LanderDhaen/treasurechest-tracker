import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
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
        <NuqsAdapter>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-col flex-1 px-4 pb-4">
                <Header />
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </NuqsAdapter>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
