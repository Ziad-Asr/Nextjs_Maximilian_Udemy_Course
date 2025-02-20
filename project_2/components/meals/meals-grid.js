import MealsItem from "./meals-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <nav className={styles.meals}>
      {meals?.map((meal) => {
        return (
          <li key={meal.id}>
            <MealsItem {...meal} />
          </li>
        );
      })}
    </nav>
  );
};

export default MealsGrid;
