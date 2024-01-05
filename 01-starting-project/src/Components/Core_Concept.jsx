//import { CORE_CONCEPTS } from "..data.js";
// this following code is the alternative code for function CoreConcept that uses props.
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Reload page" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
