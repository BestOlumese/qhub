// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, type JWTPayload } from 'jose';

const encoder = new TextEncoder();
const secret = encoder.encode(process.env.JWT_SECRET);

// Helper — returns payload if token is OK, otherwise throws
async function verify(token: string): Promise<JWTPayload> {
  return jwtVerify(token, secret).then(r => r.payload);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('accessToken')?.value;

  const authPages = pathname === '/login' || pathname === '/register';
  if (authPages) {
    if (token) {
      try {
        await verify(token);                  
        return NextResponse.redirect(new URL('/dashboard', req.url));
      } catch {
      }
    }
    return NextResponse.next();                      
  }

  // ----- 2. Protected dashboard area
  const isDashboard = pathname.startsWith('/dashboard');
  if (isDashboard) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    try {
      await verify(token);                       
      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL('/login', req.url));
      res.cookies.delete('accessToken');
      return res;
    }
  }

  // ----- 3. Everything else (public pages, assets, etc.)
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
