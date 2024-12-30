import React from "react";
import Title from "../components/Title";
import { assets } from "./../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam et asperiores, cum sequi
            soluta molestias ipsa aut molestiae, nam excepturi libero officiis quod possimus ratione sit ipsum,
            consequatur tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore, molestias impedit hic amet cum
            laboriosam sit aspernatur et accusantium? Blanditiis, voluptatum. Expedita qui nostrum perspiciatis,
            accusamus impedit at totam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti consequuntur atque, error veniam
            explicabo repellat itaque? Veniam molestias ullam quia, ipsum quae et porro sapiente nisi. Veniam, enim
            saepe?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-2">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality:Assurance:</b>
        </div>
      </div>
    </div>
  );
};

export default About;