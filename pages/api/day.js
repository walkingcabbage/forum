export default function handler(req,res) {
  const today = new Date();
  return res.status(200).json(today)
}