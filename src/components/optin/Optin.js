import React, { Component } from "react";
import Swal from "sweetalert2";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>if you want your gift right now! click on the button below...</p>
        <button
          onClick={() =>
            Swal.fire({
              icon: "error",
              title: "Oops... Error 404",
              text: "Estoy trabajando en tu regalo, cuando el contador llegue a 0, Vas a poder visualizar tu Giftcard en este link! Te amo!",
              footer: '<a>No seas desesperada Ana Paula!</a>',
              confirmButtonText: 'Usted no aprende verdad?'
            })
          }
        >
          I want my giftcard!
        </button>
      </div>
    );
  }
}

export default Optin;
