'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href={'/'}>
        <label>トップへ戻る</label>
      </Link>
    </div>
  );
}
