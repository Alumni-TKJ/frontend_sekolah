import "@/app/globals.css";

export const metadata = {
  title: "School News",
  description: "SMKN 1 Purwosari School News",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
