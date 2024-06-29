import React, { useState } from 'react';
import { Button, Tour } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import "../styles/Home.css";
import ac from "../images/acb.png"
import Navbar from './Navbar';
import Main from './Main';

const Home = () => {
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: '',
      description: (
        <div className="text-center bg-gray-800">
          <h1 className="text-3xl font-bold mb-4">N COVER</h1>
          <p className="text-lg">End to end services protection</p>
          <div className="text-lg mt-4">
            <p className="flex items-center gap-2 md:gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png"
                alt="30 days warranty"
                className="w-5 h-5"
              />
              30 days warranty on repair
            </p>
            <p className="flex items-center gap-2 md:gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png"
                alt="Free repairs"
                className="w-5 h-5"
              />
              Free repairs if the same issue arises
            </p>
            <p className="flex items-center gap-2 md:gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png"
                alt="Hassle free claims"
                className="w-5 h-5"
              />
              One-click hassle-free claims
            </p>
            <p className="flex items-center gap-2 md:gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png"
                alt="Up to 10000 Rupees cover"
                className="w-5 h-5"
              />
              Up to ₹10,000 cover if anything is damaged during the repair
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1161/1161388.png"
            alt="End"
            className="w-24 md:w-32 mt-4 mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 p-4 md:p-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            AC Service & Repair
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9801/9801892.png"
            // src={{ac}}
            alt="AC Service"
            className="w-[300px]"
          />
        </div>

        <div className="w-full md:w-[600px] h-auto bg-slate-950 rounded-md p-4">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png"
              alt="N Cover Icon"
              className="w-5 h-5"
            />
            <h1 className="text-xl font-bold">N Cover</h1>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <h2 className="text-lg">Verified quotes & 30 days warranty </h2>
            <Button type="primary" onClick={() => setOpen(true)}>
              <RightOutlined />
            </Button>
          </div>
        </div>
      </div>
      <Tour 
        open={open} 
        onClose={() => setOpen(false)} 
        steps={steps} 
        className="tour-custom-container" 
      />
    </div>
    <Main/>
    </div>
  );
};

export default Home;
