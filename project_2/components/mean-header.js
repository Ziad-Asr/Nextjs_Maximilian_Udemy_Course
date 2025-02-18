import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="A plate with food inside it" />
        Nextlevel food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodis Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
