import Logo from "../Header/Logo";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Menus from "./Menus";

export default function Footer() {
  return (
    <footer className="pt-10 bg-[#0F0F0F] px-3 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="w-full sm:w-1/3">
            <Logo demo={false} />
          </div>
          <div className="w-full sm:w-2/3">
            <Menus />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
