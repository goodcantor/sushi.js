import React from "react";
import { Categories } from "../Components/Categories";
import { Pizza } from "../Components/Pizza";
import { SortPopup } from "../Components/SortPopup";

export const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categories={[
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
        <SortPopup items={["Популярности", "Цене", "Алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((obj) => {
          return <Pizza key={`${obj.name}${obj.id}`} obj={obj} />;
        })}
      </div>
    </div>
  );
};
