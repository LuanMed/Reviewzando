import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  margin-top: 50px;
  gap: 10px;

  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 65px;
  padding-left: 15px;
  font-family: "Raleway";
  font-size: 20px;
  color: #000000;
  background: #ffffff;
  border: 0px solid;
  border-radius: 10px;
  ::placeholder {
    font-family: "Raleway";
    font-size: 20px;
    color: #aaaaaa;
  }
`;

export const Button = styled.button`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  height: 65px;
  color: #ffffff;
  background-color: #c81300;
  border: 0px;
  border-radius: 10px;
  :hover {
    background-color: #eb1700;
    transform: translateY(-2px);
  }
  :active {
    box-shadow: none;
    transform: translateY(0);
    background-color: #c81300;
  }
`;

export const LinkTo = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #aaaaaa;
`;

// <!-- HTML !-->
// <button class="button-24" role="button">Button 24</button>

// /* CSS */
// .button-24 {
//   background: #FF4742;
//   border: 1px solid #FF4742;
//   border-radius: 6px;
//   box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
//   font-size: 16px;
//   font-weight: 800;
//   line-height: 16px;
//   min-height: 40px;
//   outline: 0;
//   padding: 12px 14px;
//   text-align: center;
//   text-rendering: geometricprecision;
//   text-transform: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
// }

// .button-24:hover,
// .button-24:active {
//   background-color: initial;
//   background-position: 0 0;
//   color: #FF4742;
// }

// .button-24:active {
//   opacity: .5;
// }

// <!-- HTML !-->
// <button class="button-27" role="button">Button 27</button>

// /* CSS */
// .button-27 {
//   appearance: none;
//   background-color: #000000;
//   border: 2px solid #1A1A1A;
//   border-radius: 15px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//   font-size: 16px;
//   font-weight: 600;
//   line-height: normal;
//   margin: 0;
//   min-height: 60px;
//   min-width: 0;
//   outline: none;
//   padding: 16px 24px;
//   text-align: center;
//   text-decoration: none;
//   transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
//   will-change: transform;
// }

// .button-27:disabled {
//   pointer-events: none;
// }

// .button-27:hover {
//   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//   transform: translateY(-2px);
// }

// .button-27:active {
//   box-shadow: none;
//   transform: translateY(0);
// }
