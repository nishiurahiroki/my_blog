import { NextResponse } from 'next/server';
import { client } from '../../../libs/client';
import { Blog } from '../../../models/Blog';

async function getContent(contentId: string) {
  const result = await client.get<Blog>({
    endpoint: 'blogs',
    contentId,
  });
  return result;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.error();
  }
  const data = await getContent(id);
  return NextResponse.json(data);
}
