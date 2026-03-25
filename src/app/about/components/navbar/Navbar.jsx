import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={style.navbar}>
      <a href="">About me</a>
      <a href="">Tech stack</a>
      <a href="">Experiences</a>
      <a href="">Projects</a>
    </nav>
  );
};

export default Navbar;
