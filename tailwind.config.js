/** @type {import('tailwindcss').Config} **/

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#61B37B",
      dark_gray: "#3D3D3D",
    },
    gridTemplateColumns: {
      // Custom grid layout
      custom: "1fr 1fr 1fr 1fr auto",
    },
  },
};
export const plugins = [];
