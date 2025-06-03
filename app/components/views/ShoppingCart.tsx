import Footer from "./Footer";
import Notification from "./Notification";

function ShoppingCart() {


  return (
    <div
      data-testid="SHOPPING_CART.CONTAINER:VIEW"
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div className="flex flex-1 p-2.5 justify-center items-center flex-col gap-2.5">
        <Notification
          testId="SHOPPING_CART.CONTAINER.NOTIFICATION:VIEW"
          text="Cart is empty!"
          severity="INFO"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
