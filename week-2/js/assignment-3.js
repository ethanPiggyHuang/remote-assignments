function calculate(data) {
    var totalPrice = 0;
    for(let i=0; i<data.products.length; i++){
      var itemPrice = (1-data.discount) * data.products[i].price;
      console.log(`${data.products[i].name} after discount: ${itemPrice}`);
      totalPrice += itemPrice;
    }
    console.log(`total price: ${totalPrice}`);
  }

const discountedPrice = calculate({
  discount: 0.1, 
  products: [
    {
      name: "Product 1",
      price: 100 
    },
    {
      name: "Product 2",
      price: 700 
    },
    {
      name: "Product 3",
      price: 250 
    }
    ]
  });

  console.log(discountedPrice); // show the total price of all products after applying a discount