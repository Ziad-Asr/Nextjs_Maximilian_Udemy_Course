import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import styles from "./page.module.css";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Find out our all meals.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals craeted
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
