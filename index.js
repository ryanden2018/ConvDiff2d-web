const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req,res) => {
	res.redirect("/ConvDiff2d.html");
});

app.listen(port, () => {} )

