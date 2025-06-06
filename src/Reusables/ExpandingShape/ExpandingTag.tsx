import { ReactNode } from "react";
import styles from "./ExpandingShape.module.css";

interface Props {
  title: ReactNode;
}

const ExpandingTag = ({ title }: Props) => {
  return <div className={styles.tagShape}>{title}</div>;
};

export default ExpandingTag;

//  <ExpandingTag
//         title={
//           <text>
//             Type
//             <br />
//             This
//           </text>
//         }
//       />
