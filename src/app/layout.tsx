export const metadata = {
  title: 'My blog.',
  description: 'My blog site.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header></header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 AIが書いたブログサイト</p>
        </footer>
      </body>
    </html>
  );
}
