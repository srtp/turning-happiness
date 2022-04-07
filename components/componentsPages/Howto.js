import React from "react";

function Howto() {
  return (
    <div className="container mx-auto py-30">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-start-1 col-end-7 px-10 sm:px-22 md:px-22 lg:px-72 text-lg">
          <center className="mt-20">
            <button className=" bg-pink-300 hover:bg-pink-400 px-20 py-10 rounded-md text-white mb-10">
              <span>
                หากย้อนเวลากลับไปได้สิ่งแรกที่คุณอยากทำมากที่สุด คืออะไร ?{" "}
                <br /> ลองมาสัมผัสบรรยากาศเหล่านั้นผ่านเนื้อเรื่องของเราดูสิ
              </span>
              <br />
              <br />
              <span>Let's Play Now !!</span>
            </button>
            <button className=" bg-green-500 hover:bg-green-400 px-20 py-10 rounded-md text-white mb-10">
              <span>
                ลองมารู้จักตัวตนของคุณ <br /> เพิ่มขึ้นดูสิ <br />
              </span>
            </button>
            <br />
            <button className=" bg-purple-300 hover:bg-purple-400 px-20 py-10 rounded-md text-white mb-10">
              <span>การ์ดบ่งบอกความเป็นตัวคุณ</span>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Howto;
