import styles from "./listItems.module.css";

interface Props {
  items: string[];
  classList: string[];
}

const ListItems = ({ items, classList }: Props) => {
  const classNames = [styles.list, classList.map((cls) => styles[cls])].join(
    " "
  );
  return (
    <ul>
      {items.map((item, index) => (
        <li className={classNames} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
