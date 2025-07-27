import { NextRequest, NextResponse } from 'next/server';
import { fetchGeminiResponse } from '@/lib/utils';

export const runtime = 'nodejs';

// POST /api/gemini-chat
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    const response = await fetchGeminiResponse(messages);
    return NextResponse.json({ response });
  } catch (err) {
    return NextResponse.json({ error: 'Gemini API error' }, { status: 500 });
  }
} 