import React, { memo } from "react";
import styles from './Tabs.module.css'

export const Tabs = ({ items, setActiveItem, activeItem }) => {
  const hanldeClick = (key) => {
    setActiveItem?.(key);
  };
  return (
    <div className={`border-bottom border-2 py-2 px-4 mb-3 ${styles.tabItems}`}>
      {items.map(({ label, key }, ind) => {
        return (
          <span
            className={`${activeItem === key ? styles.activeTab : ""}`}
            onClick={() => hanldeClick(key)}
            key={`span_${ind}`}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

