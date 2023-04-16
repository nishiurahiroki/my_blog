import { title } from 'process';
import { title } from 'process';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
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

export async function POST(request: NextRequest) {
  const headersList = headers();

  if (!headersList.get('authorization')) {
    return NextResponse.json({
      error: 'Token none.',
    });
  }

  const apiKey = headersList.get('authorization')?.split(' ')[1];
  if (apiKey !== process.env.SECRET_TOKEN) {
    return NextResponse.json({
      error: 'Token invalid.',
    });
  }

  const body = await request.json();
  const title = body.title;
  const content = body.content;

  const result = await client.create({
    endpoint: 'blogs',
    content: {
      title,
      content,
    },
  });

  return NextResponse.json({
    result,
  });
}
