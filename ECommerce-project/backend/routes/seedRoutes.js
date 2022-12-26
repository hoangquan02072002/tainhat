import express from 'express';
import { seed } from '../controllers/seedRoutes.js';
const seedRouter = express.Router();

seedRouter.get('/', seed /*async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
}*/);
export default seedRouter;