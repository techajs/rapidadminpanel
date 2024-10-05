import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/styles.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Dashboard",
  description: "Next.js Dashboard with Authentication and Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
