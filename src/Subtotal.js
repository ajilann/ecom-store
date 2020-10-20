import React from "react";
import "./Subtotal.css";
import Currencyformat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            {" "}
            {/* use jsx format to use html tag */}
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="Checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
