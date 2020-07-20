const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

//Routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

app.listen(PORT, () => {
  console.log(`Server starts at port ${PORT}`);
});
