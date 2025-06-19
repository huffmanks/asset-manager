import "./globals.css";

export const metadata = {
  title: "Asset Manager",
  description: "Manage your assets.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
