const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const campaignRoutes = require('./routes/campaigns');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/promomediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use('/api/campaigns', campaignRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
