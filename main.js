const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({message: "Hey, Docker is working !"});
});

app.get('/test', (req, res) => {
  res.json({message: "Hey, Docker is working from test route !"});
});

app.get('/health', (req, res) => {
  res.json({status: true, message: "Everything working perfectly v2✌️!"});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);