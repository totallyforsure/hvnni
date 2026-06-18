export default async (request, context) => {
  const url = new URL(request.url);

  // Only log non-browser requests (Swagify will send API calls, not page loads)
  const ua = request.headers.get('user-agent') || '';
  const isApi = request.method !== 'GET' || url.pathname.includes('api') || url.pathname.includes('product');
  const isBrowser = ua.includes('Mozilla') && !isApi;

  if (!isBrowser) {
    console.log('CATCH-ALL:', JSON.stringify({
      method: request.method,
      path: url.pathname,
      search: url.search,
      userAgent: ua,
      contentType: request.headers.get('content-type'),
      body: request.method !== 'GET' ? await request.text() : null
    }));
  }

  return context.next();
};

export const config = { path: "/*" };
