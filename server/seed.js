const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const products = [
  {
    href: '/sanpham.html',
    name: 'Bàn phím DareU EK87V2 Black Brown Switch',
    img: '/assets/img/img_banphim_banchay/banphim_9.webp',
    status: 'new-product',
    frame: '',
    connect: 'Có dây',
    size: 'TKL',
    switch: 'ABS',
    origin_price: 699000,
    reduce_price: 549000,
    star: 3,
    rate: 10,
  },
];

async function seedProducts() {
  try {
    await Product.deleteMany(); // Xóa dữ liệu cũ (tùy chọn)
    await Product.insertMany(products);
    console.log('Products seeded successfully');
  } catch (err) {
    console.error('Error seeding products:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedProducts();