import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={style.navbar}>
      <a href="#about">About</a>
      <a href="#technologies">Technologies</a>
      <a href="#experiences">Experiences</a>
      <a href="#projects">Projects</a>
    </nav>
  );
};

export default Navbar;
