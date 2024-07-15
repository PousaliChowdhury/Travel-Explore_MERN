// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', authRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
