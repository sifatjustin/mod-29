let total_price = 0;
let discounted_price = 0;
let total = 0;
let count = 0 ;

function add_to_cart(view) {
  var product_name = view.getElementsByTagName("h3")[0].innerText;
  var product_price = view.getElementsByTagName("p")[0].innerText.split(" ")[0];
  count = count + 1;
 
  var cart_item = document.createElement("p");
  cart_item.innerHTML = count + " " + product_name ;
  document.getElementById("cart").appendChild(cart_item);

  total_price = parseFloat(total_price) + parseFloat(product_price);
  document.getElementById("totalPrice").innerText = total_price;

 
  if (total_price > 200) {
    document.getElementById("discount_btn").disabled = false;
  }else{
    document.getElementById("discount_btn").disabled = true;
  }
  calculate_total();
}

function calculate_total(){
  const inputField = document.getElementById("inputField");
  
  if (inputField.value.trim() === "SELL200") {
    if (total_price > 200) {
      discounted_price = total_price * 20 / 100
    }
  }

  
  total = total_price - discounted_price
  document.getElementById("totalDiscount").innerText = discounted_price;
  document.getElementById("total").innerText = total;
}

function make_purchase(){
  if(total > 0){
    my_modal_4.showModal()
  }
}

