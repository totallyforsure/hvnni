exports.handler = async (event) => {
  console.log('SWAGIFY HIT:', JSON.stringify({
    method: event.httpMethod,
    path: event.path,
    headers: event.headers,
    body: event.body
  }, null, 2));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true })
  };
};
