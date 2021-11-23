import 'dotenv/config.js';
import express from 'express';
import menuRouter from './routes/menuRouter.js';
import sideDishesRouter from './routes/sideDishesRouter.js';
import cors from 'cors';
import { sequelize } from './models/index.js';''

var corsOptions = {
  origin: "*"
};

const app = express();
const port = 8080;
// sequelize.sync({ force: false })
//          .then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/menu', menuRouter);
app.use('/sideDishes', sideDishesRouter)

app.get("/", (req, res) => {
  res.json({ message: "A simple route is working so far" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});