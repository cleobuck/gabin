export default function handler(req, res) {
  // Handle different HTTP methods
  if (req.method === "GET") {
    // Handle GET request
    res.status(200).json({ message: "Hello from serverless function!" });
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
