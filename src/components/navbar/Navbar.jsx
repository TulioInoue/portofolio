import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={style.navbar}>
      <a href="">about me</a>
      <a href="">stack</a>
      <a href="">experience</a>
      <a href="">projects</a>
    </nav>
  );
};

export default Navbar;
