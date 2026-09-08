const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

// const  sequelize = require('./util/database')
const Product = require("./models/product1");
const User = require("./models/user");
const sequelize = require("./util/database");
const Cart1 = require("./models/cart1");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

const app = express();

// db.execute('select * from products').then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// association
Product.belongsTo(User, {
  constrains: true,
  onDelete: "CASCADE",
});
User.hasMany(Product);

User.hasOne(Cart1);

Cart1.belongsTo(User);

Cart1.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart1, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

// all your modules and it then basically created tables for them  that is what sync() done;
// it sync() your module to the database by creating the appropriate tables and if you have them relation
// {force:true} used to override the table
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "max", email: "test@gamil.com" });
    }
    return user;
  })
  .then((user) => {
    // console.log(user)
    return user.createCart().then((cart) => {
      console.log(cart);
      app.listen(3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
