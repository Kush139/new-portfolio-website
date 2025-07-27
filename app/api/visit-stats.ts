import { NextRequest, NextResponse } from 'next/server';

// In-memory store (resets on server restart or redeploy)
let visits = 0;
let recentLocations: string[] = [];
const techStack = [
  { name: 'Next.js', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'Python', percentage: 88 },
  { name: 'TensorFlow', percentage: 85 },
  { name: 'PostgreSQL', percentage: 82 },
];

// Helper to get city/country from IP (demo, not for production)
async function getLocation(ip: string) {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    if (data && data.city && data.country_code) {
      return `${data.city}, ${data.country_code}`;
    }
  } catch {}
  return 'Unknown';
}

export async function GET(req: NextRequest) {
  visits++;
  let ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.ip || '';
  if (ip === '::1' || ip === '127.0.0.1') ip = '';
  let location = 'Unknown';
  if (ip) {
    location = await getLocation(ip);
    if (location !== 'Unknown' && !recentLocations.includes(location)) {
      recentLocations.unshift(location);
      if (recentLocations.length > 5) recentLocations = recentLocations.slice(0, 5);
    }
  }
  return NextResponse.json({
    visits,
    recentLocations,
    techStack,
  });
}

// To use a persistent store, replace the in-memory variables with DB or KV store logic. 