import '../styles/global.css';

export const metadata = {
  title: 'AIが書いた怪談',
  description: 'AIが書いた怪談を掲載',
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
      <body className="bg-slate-950 text-white md:container md:mx-8">
        <main>{children}</main>

        <footer className="bg-slate-950 rounded-lg shadow dark:bg-gray-800">
          <div className="w-full max-w-screen-xl pt-8 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 AIが書いた怪談ブログ . All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
