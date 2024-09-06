import Logo from "../Header/Logo";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Menus from "./Menus";

export default function Footer() {
  return (
    <footer className="pt-10 bg-[#0F0F0F] px-3 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mx-auto text-white">
          <Logo demo={false} />
          <h4 className={styles.gradientHDNG}>Disclaimer</h4>
          <p>
            This website is provided for general use and informational purposes
            only. Nothing provided on our website shall constitute financial
            advice, suggestion or recommendation. Users should independently
            evaluate and verify the suitability of any such listed entities
            before engaging with them. For more information, visit our Terms &
            Conditions page.
          </p>
          <div className="bg-[#1C2069] h-[1px] my-8"></div>
        </div>
        <Menus />
      </div>
      <Copyright />
    </footer>
  );
}
