const express = require('express');
const apiRouter = require("./routes/routes");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', apiRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
