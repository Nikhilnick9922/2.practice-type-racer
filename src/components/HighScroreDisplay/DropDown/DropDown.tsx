import React, { useState } from "react";
import styles from "./dropdown.module.css";

// Type for a single option, kept for clarity within the component
type Option = {
  value: string;
  label: string;
};

// Hardcoded options for design demonstration
const hardcodedOptions: Option[] = [
  { value: "item1", label: "Latest High Scores" },
  { value: "item2", label: "Second Item" },
  { value: "item3", label: "A Third Much Longer Item to Check Text" },
  { value: "item4", label: "Fourth Item" },
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // State now tracks the entire selected option object to manage the tick mark
  const [selectedOption, setSelectedOption] = useState<Option>(
    hardcodedOptions[0]
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownHeader}
        onClick={handleToggle}
        tabIndex={0}
      >
        <span>{selectedOption.label}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}></span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {hardcodedOptions.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {/* This span holds the tick mark, rendered conditionally */}
              <span className={styles.tickContainer}>
                {selectedOption.value === option.value && "✓"}
              </span>
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
