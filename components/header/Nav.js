import React from "react";

function Nav() {
  return (
    <div>
      <div className="bg-gray-100 font-sans w-full  m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <img src="/logo.png" width={200} alt="logo" />
              </div>
              <div className=" sm:flex sm:items-center">
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4"
                >
                  Story
                </a>
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4"
                >
                  Question
                </a>
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-700 mr-4"
                >
                  MBTI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
