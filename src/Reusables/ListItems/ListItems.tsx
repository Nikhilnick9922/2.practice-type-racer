import styles from "./listItems.module.css";

interface Props {
  items: string[];
}

const ListItems = ({ items }: Props) => {
  const classNames = [styles.list, items.map((cls) => styles[cls])].join(" ");
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
