const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Predefined SEO headlines
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "{name} is Revolutionizing Local Taste in {location}",
  "Discover the Secret Behind {name}'s Success in {location}",
  "How {name} Became a Local Favorite in {location}"
];

// POST /business-data → returns static rating, reviews, and a headline
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const headline = headlines[0]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({
    rating: 4.3,
    reviews: 127,
    headline
  });
});

// GET /regenerate-headline → returns a random headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  const headline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({ headline });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
