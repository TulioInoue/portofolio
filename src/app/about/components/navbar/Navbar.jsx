import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={style.navbar}>
      <a href="">About</a>
      <a href="">Technologies</a>
      <a href="">Experiences</a>
      <a href="">Projects</a>
    </nav>
  );
};

export default Navbar;
