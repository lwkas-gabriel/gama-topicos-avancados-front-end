import Link from "../Link";
import Logo from "../../assets/images/logo.png"
import "./styles.css";

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo do Din Din" />
            <nav>
                < Link name="Cursos" redirect="/cursos" />
                < Link name="Blog" redirect="/blog" />
                < Link name="Contato" redirect="/contato" />
            </nav>
        </header>
    );
}

export default Header;  