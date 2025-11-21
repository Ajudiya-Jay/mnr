import express  from 'express';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.use('/', (req, res) => {  
    res.render("index");
})

server.listen(9000, "0.0.0.0", () => {
    console.info(
        "Express server started on http://0.0.0.0:9000"
    );
})