import React from "react";
import ReactDOM from "react-dom";

function Card(probs) {
  return (
    <div>
      <h2>{probs.name}</h2>
      <img src={probs.image} alt="avatar_img" />
      <p>{probs.tel}</p>
      <p>{probs.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="manoj"
      image="https://www.bing.com/th?id=OIP.49CH_m8xcY3b6stGkMkG2AHaEO&w=330&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.61&pid=3.1&rm=2"
      tel="+945 629 278"
      email="dummy@gmail.com"
    />
    <Card
      name="hari"
      image="https://th.bing.com/th/id/OIP.0eQ151pvCZEUJH9DHFMwUAHaJ4?pid=ImgDet&rs=1"
      tel="+675 896 356"
      email="probs@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
