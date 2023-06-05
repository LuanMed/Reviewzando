import { w } from "windstitch";

// @media all and (max-width: 768px) {
//   html {
//   font-size: 87.5%
//   }
//   }

export const ContainerForm = w.div(
  `
  flex flex-col justify-center justify-items-center items-center bg-slate-500"
    `
);

export const Form = w.form(
  `
  flex flex-col items-center
  `
);

export const Input = w.input(
  `
  w-96 h-16 bg-white text-black rounded-md placeholder-grey pl-5 mb-3
  `
);

export const Button = w.button(
  `
  w-96 h-16 font-bold text-[27px] text-2xl text-white bg-red-700 rounded-md mb-3
  `
);

export const Title = w.h1(
  ` flex 
    justify-center

    `
);
