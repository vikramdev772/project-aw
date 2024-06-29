import React from "react";

const Main = () => {
  return (
    <div className="flex items-center justify-center mb-8 md:mb-12">
      <div className="w-full md:w-5/6 lg:w-[90%] max-w-screen-lg p-4 md:p-10 h-auto rounded-xl bg-slate-950 flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8">
        <div className="w-full md:w-[300px] h-auto rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-vector/climate-control-poster-with-air-conditioning-technology-symbols-realistic-illustration_1284-29136.jpg?ga=GA1.1.1692828661.1719634593&semt=ais_user"
            alt="Service"
            className="object-cover w-full h-[200px] rounded-lg"
          />
          <h1 className="text-white text-xl md:text-2xl mt-2 text-center cursor-pointer hover:text-blue-800 hover:font-bold">
            Service
          </h1>
        </div>
        <div className="w-full md:w-[300px] h-auto rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-vector/isometric-air-conditioning-concept-with-worker-men-installing-cooking-system-vector-illustration_1284-80987.jpg?ga=GA1.1.105501217.1719600160&semt=ais_user"
            alt="Install & Uninstall"
            className="object-cover w-full h-[200px] rounded-lg"
          />
          <h1 className="text-white text-xl md:text-2xl mt-2 text-center cursor-pointer hover:text-blue-800 hover:font-bold">
            Install & Uninstall
          </h1>
        </div>
        <div className="w-full md:w-[300px] h-auto rounded-lg shadow-lg flex flex-col items-center">
          <img
             src="https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg?ga=GA1.1.105501217.1719600160&semt=ais_user"
             alt="Repair & Gas Refill"
            className="object-cover w-full h-[200px] rounded-lg"
          />
          <h1 className="text-white text-xl md:text-2xl mt-2 text-center cursor-pointer hover:text-blue-800 hover:font-bold">
            Repair & Gas Refill
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
