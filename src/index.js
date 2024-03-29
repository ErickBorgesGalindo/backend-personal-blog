const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const categoryRoutes = require('./routes/category.routes');
const userRoutes = require('./routes/user.routes');
const loginRoutes = require('./routes/login.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(categoryRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(adminRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message:err.message
    });
});

app.listen(3000);
console.log('Server on port 3000');