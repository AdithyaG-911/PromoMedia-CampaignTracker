const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const campaignRoutes = require('./routes/campaigns');

const app = express();

app.use(cors({
  origin: "promo-media-campaign-tracker-dsxq-8hla1eg3t.vercel.app",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use('/api/campaigns', campaignRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));