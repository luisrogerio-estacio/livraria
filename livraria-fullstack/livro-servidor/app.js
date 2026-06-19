const express =
  require("express");

const cors =
  require("cors");

const livroRouter =
  require("./routes/livros");

const errorHandler =
  require("./middleware/error-handler");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: false
}));

app.use(
  "/livros",
  livroRouter
);

app.use(errorHandler);

module.exports = app;