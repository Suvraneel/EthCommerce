import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const payload = JSON.parse(req.body);
    const payload = req.body;
    console.log(payload); 
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.write(`data: ${payload}`);
    setInterval(() => {
        const message = `data: An event occurred at ${new Date().toISOString()}\n\n`;
        res.write(message);
    }, 5000);
}