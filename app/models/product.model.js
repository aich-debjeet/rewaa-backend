module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      }
    });
  
    return Product;
  };