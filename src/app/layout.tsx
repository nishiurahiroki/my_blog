import '../styles/global.css';

export const metadata = {
  title: 'AIが書いた怪談',
  description: 'AIが書いた怪談を更新',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  keyword: 'AI、chat-GPT、怪談',
  themeColor: 'black',
  keywords: ['index', 'follow'],
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
