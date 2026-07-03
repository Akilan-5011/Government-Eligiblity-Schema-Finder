export default function handler(req, res) {
  const { id } = req.query;
  const schemes = [ /* same array as above, or import from a shared file */ ];
  const scheme = schemes.find(s => s.id === id);
  if (!scheme) return res.status(404).json({ error: 'Scheme not found' });
  res.status(200).json(scheme);
}