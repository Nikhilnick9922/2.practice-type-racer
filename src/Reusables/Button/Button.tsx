import styles from "./Button.module.css";

interface Props {
  title: string;
  color?: string;
  classes: string[];
}

const Button = ({ title, color, classes }: Props) => {
  const classNames = [
    styles.btn, // Always include the base button style
    ...(classes || []).map((cls) => styles[cls]), // Map each class string to its CSS module counterpart
  ].join(" ");
  return (
    <button style={{ backgroundColor: `${color}` }} className={classNames}>
      {title}
    </button>
  );
};

export default Button;

//  background-color: #67ac5b; green
//  background-color: #219ab0;   blue
//  background-color: #ffd61e; yellow
//  background-color : #e68200; orange
//  background-color : #ffb11b; light orange

// <div className="btnGroup">
//     <Button color="#00bcf5" title="Refresh  XX" classes={["btnNormal"]} />
//     <i className="fa fa-refresh" aria-hidden="true"></i>
//   </div>
