import { NextRequest, NextResponse } from 'next/server';

const TARGET_URL = 'https://us.fullscript.com';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruct the path
    const path = params.path.join('/');
    const targetUrl = `${TARGET_URL}/${path}`;
    
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const fullTargetUrl = queryString ? `${targetUrl}?${queryString}` : targetUrl;

    // Forward the request to the target server
    const response = await fetch(fullTargetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept': request.headers.get('accept') || '*/*',
        'Accept-Language': request.headers.get('accept-language') || '',
        'Accept-Encoding': request.headers.get('accept-encoding') || '',
        'Cache-Control': request.headers.get('cache-control') || '',
        'Referer': request.headers.get('referer') || '',
      },
    });

    // Get the response body
    const body = await response.text();

    // Create a new response with the proxied content
    const proxiedResponse = new NextResponse(body, {
      status: response.status,
      statusText: response.statusText,
    });

    // Copy important headers
    const headersToForward = [
      'content-type',
      'content-length',
      'content-encoding',
      'cache-control',
      'expires',
      'last-modified',
      'etag',
    ];

    headersToForward.forEach(header => {
      const value = response.headers.get(header);
      if (value) {
        proxiedResponse.headers.set(header, value);
      }
    });

    // Set CORS headers if needed
    proxiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    proxiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    proxiedResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return proxiedResponse;
  } catch (error) {
    console.error('Fullscript proxy error:', error);
    return new NextResponse('Proxy Error', { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/');
    const targetUrl = `${TARGET_URL}/${path}`;
    
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const fullTargetUrl = queryString ? `${targetUrl}?${queryString}` : targetUrl;

    // Get the request body
    const body = await request.text();

    // Forward the POST request
    const response = await fetch(fullTargetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': request.headers.get('content-type') || 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept': request.headers.get('accept') || '*/*',
        'Authorization': request.headers.get('authorization') || '',
      },
      body: body,
    });

    const responseBody = await response.text();
    const proxiedResponse = new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
    });

    // Copy headers
    const headersToForward = [
      'content-type',
      'content-length',
      'content-encoding',
      'cache-control',
      'expires',
      'last-modified',
      'etag',
    ];

    headersToForward.forEach(header => {
      const value = response.headers.get(header);
      if (value) {
        proxiedResponse.headers.set(header, value);
      }
    });

    return proxiedResponse;
  } catch (error) {
    console.error('Fullscript proxy error:', error);
    return new NextResponse('Proxy Error', { status: 500 });
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
