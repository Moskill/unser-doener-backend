import 'dotenv/config.js';
import express from 'express';
import menuRouter from './routes/menuRouter.js';
import sideDishesRouter from './routes/sideDishesRouter.js';
import menuSideDishesRouter from './routes/menuSideDishesRouter.js';
import usersRouter from './routes/usersRouter.js';
import uploadRouter from './routes/uploadRouter.js';
import orderRouter from './routes/orderRouter.js';
import cors from 'cors';
import { sequelize } from './models/index.js'; // For sync the Sequelizer in L. 14-17


var corsOptions = {
  origin: "*",
  exposedHeaders: 'Content-Range'
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
app.use('/uploads', express.static('public/upload'))

// Hier dann die weiteren Routes hinzufügen
app.use('/menu', menuRouter );
app.use('/sideDishes', sideDishesRouter);
app.use('/menuSideDishes', menuSideDishesRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/orders', orderRouter);

// The root route will lead to the main application
app.get("/", (req, res) => {
  res.json({ message: "A simple route is working so far" });
});

app.get("/admin", (req, res) => {
  res.json({ message: "Entering the Admin section..." });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});