import React from "react";

export const Categories = ({ categories, ...rest }) => {
  const [activeCategory, setActiveCategory] = React.useState(null);
  const allSelect = (index) => {
    setActiveCategory(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => allSelect(null)}
        >
          Все
        </li>
        {categories &&
          categories.map((category, index) => {
            return (
              <li
                key={`${category}_${index}`}
                onClick={() => setActiveCategory(index)}
                {...rest}
                className={activeCategory === index ? "active" : ""}
              >
                {category}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
