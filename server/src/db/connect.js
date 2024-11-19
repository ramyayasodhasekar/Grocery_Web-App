const mongoose = require("mongoose");

// Connection string
mongoose.connect('mongodb+srv://abinayap:abinayap@abistores.ove8u.mongodb.net/grocery-store?retryWrites=true&w=majority&appName=AbiStores', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('No connection:', err));
