import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Onur',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'ADMIN',
        logo: '/images/admin.png',
        description: 'Website administrator Onur DINC',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/nike_slim_shirt.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/adidas_fit_shirt.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Free Shirt (no stock)',
      category: 'Shirts',
      image: '/images/lacost_slim_shirt.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/nike_slim_pant.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/puma_slim_pant.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/fit_pant.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 0,
      numReviews: 0,
      description: 'high quality product',
    },
  ],
};
export default data;
