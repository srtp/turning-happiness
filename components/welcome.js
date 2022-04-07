import React from "react";

function Welcome() {
  return (
    <div>
      <center>
        <img src="/logo.png" alt="logo" className="py-10" />
        โปรเจ็คของเราได้แรงบันดาลใจมา <br />
        จากการที่เราต้องการช่วยเหลือ
        <br />
        ผู้อื่นที่กำลังเผชิญกับปัญหาต่างๆ
        <br />
        ในชีวิตประจำวันมากมาย
        <br />
        ที่อาจเกิดได้จากหลายสาเหตุ
        <br />
        เราจะนำพาทุกท่านมาสัมผัส
        <br />
        ความสุขในรูปแบบที่แตกต่างผ่าน
        <br />
        การมารู้จักตัวเองมากขึ้น <br />
        <br />
        <button className="bg-sky-600 hover:bg-sky-700 px-10 py-1 rounded-md text-white">
          {" "}
          ถัดไป
        </button>
      </center>
    </div>
  );
}

export default Welcome;
