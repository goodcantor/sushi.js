import React from "react";
import { Categories } from "../components/Categories";
import { Pizza } from "../components/Pizza";
import { SortPopup } from "../components/SortPopup";
import { useDispatch, useSelector } from "react-redux";

export const Home = ({ pizzas }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.amount);
  const plusNumber = () => {
    dispatch({ type: "INCREMENT", payload: 5 });
  };
  console.log(selected);

  return (
    <div className="container" onClick={() => plusNumber()}>
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
      <h2 className="content__title">Все пиццы {selected}</h2>
      <div className="content__items">
        {pizzas.map((obj) => {
          return <Pizza key={`${obj.name}${obj.id}`} obj={obj} />;
        })}
      </div>
    </div>
  );
};
