import "./globals.css";

export const metadata = {
  title: "FitLytics | Fitness & Performance",
  description:
    "FitLytics is a modern fitness and performance destination built for people who want to train harder, move better and become stronger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}