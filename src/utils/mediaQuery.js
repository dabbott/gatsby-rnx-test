// const calculateResponsiveBreakpoints = ({ width, isMobile }) => {
//   const attributes = [];

//   if (width > 1280) {
//     attributes.push("large");
//   } else if (width > 800) {
//     attributes.push("medium");
//   } else {
//     attributes.push("small");
//   }

//   if (isMobile) {
//     attributes.push("mobile");
//   } else {
//     attributes.push("desktop");
//   }

//   return attributes.join("-");
// };

const size = {
  medium: '800px',
  large: '1280px',
}

const mediaQuery = {
  small: `@media (max-width: ${size.medium})`,
  medium: `@media (max-width: ${size.large}) and (min-width: ${size.medium})`,
  large: `@media (min-width: ${size.large})`,
}

export default mediaQuery
