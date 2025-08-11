import { setCORSHeaders } from '../src/lib/cors.js';
import prisma from '../src/lib/prisma.js';

/**
 * `About` API handler.
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @returns
 */
export default async function handler(req, res) {
  // Set CORS headers
  setCORSHeaders(res);
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  // Handle GET request
  if (req.method === 'GET') {
    try {
      const about = await prisma.about.findMany({});
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(about));
    } catch (error) {
      console.log(error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
}
