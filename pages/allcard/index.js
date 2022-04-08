import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Index() {
  return (
    <div>
      <center>
        การ์ดทั้งหมด
        <br />
        <br />
        <Zoom>
          <img src="/allCard/1.png" alt="123" />
        </Zoom>
        <Zoom>
          <br />
          <img src="/allCard/2.png" alt="123" />
        </Zoom>
        <Zoom>
          <br />
          <img src="/allCard/3.png" alt="123" />
        </Zoom>
        <Zoom>
          <br />
          <img src="/allCard/4.png" alt="123" />
        </Zoom>
      </center>
    </div>
  );
}

export default Index;
