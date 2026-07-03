export default function handler(req, res) {
  res.status(200).json({
    status: '✅ Backend connected successfully!',
    timestamp: new Date().toISOString()
  });
}