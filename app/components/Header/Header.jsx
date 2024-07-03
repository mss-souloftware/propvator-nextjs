import Accounts from "./Accounts";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="fixed top-7 w-full z-10">
            <div className="container mx-auto">
                <div className={`${styles.header} flex justify-between items-center rounded-xl`}>
                    <Logo />
                    <div className="flex justify-between items-center">
                        <Accounts />
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    )
}
