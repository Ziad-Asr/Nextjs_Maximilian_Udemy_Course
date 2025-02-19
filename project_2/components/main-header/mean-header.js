import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/mian-header-background";
import styles from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="A plate with food inside it" priority />
          Nextlevel food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodis Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
