import "./Header.scss";

export function Header() {
  return (
    <div className="Header__container">
      <a href="https://linkedin.com/in/makhovsky" rel="noreferrer" target="_blank">
        <i className="bx bxl-linkedin-square bx-lg Header__icons"></i>
      </a>
      <a href="https://github.com/MahimkO" rel="noreferrer" target="_blank">
        <i className="bx bxl-github bx-lg Header__icons"></i>
      </a>
      <a href="https://vk.com/mahovsky" rel="noreferrer" target="_blank">
        <i className="bx bxl-vk bx-lg Header__icons"></i>
      </a>
    </div>
  );
}
