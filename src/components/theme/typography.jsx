import React from "react";

//    typography heading component
export const Headings = ({
  children,
  className,
  main_Heading,
  xxl,
  xl,
  lg,
  style,
  x2xl,
}) => {
  switch (true) {
    case main_Heading:
      return (
        <h1
          className={`2xl:text-[64px] lg:text-4xl text-2xl font-lato_bold uppercase ${className}`}
        >
          {children}
        </h1>
      );
    case xxl:
      return (
        <h2
          className={`2xl:text-[32px] xl:text-2xl text-xl font-lato_bold ${className}`}
        >
          {children}
        </h2>
      );
    case x2xl:
      return (
        <h2
          className={`2xl:text-2xl md:text-xl dark:text-white text-dark1   text-base font-lato_bold   ${className}`}
          style={style}
        >
          {children}
        </h2>
      );
    case xl:
      return (
        <p
          className={`2xl:text-xl lg:text-lg sm:text-base text-sm dark:text-white text-dark1  font-lato_bold ${className}`}
          style={style}
        >
          {children}
        </p>
      );
    case lg:
      return (
        <p className={`md:text-lg font-lato_bold ${className}`}>{children}</p>
      );
    default:
      return <p className={`text-sm md:text-base ${className}`}>{children}</p>;
  }
};

//    typography Paragraph component

// export const Paragraph = ({ children, className, sm, xs }) => {
//   switch (true) {
//     case sm:
//       return (
//         <p className={`2xl:text-xl md:text-base text-sm ${className}`}>
//           {children}
//         </p>
//       );
//     case xs:
//       return (
//         <p className={` text-n4 font-Gilroy_Medium text-xs ${className}`}>
//           {children}
//         </p>
//       );
//     default:
//       return (
//         <p
//           className={`text-left text-n2 font-semibold font-Gilroy_SemiBold xs:text-base text-sm ${className}`}
//         >
//           {children}
//         </p>
//       );
//   }
// };
