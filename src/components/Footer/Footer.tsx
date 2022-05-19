import './Footer.scss';

export function Footer() {
  return ( 
    <div className='Footer__container'>
      <p>This site was made by Makhovsky Maxim. 2022</p>
      <div className="Footer__images_container">
        <a href="https://linkedin.com/in/makhovsky" rel="noreferrer" target="_blank">
          <i className="bx bxl-linkedin-square bx-lg Footer__icons"></i>
        </a>
        <a href="https://github.com/MahimkO" rel="noreferrer" target="_blank">
          <i className="bx bxl-github bx-lg Footer__icons"></i>
        </a>
        <a href="https://vk.com/mahovsky" rel="noreferrer" target="_blank">
          <i className="bx bxl-vk bx-lg Footer__icons"></i>
        </a>
      </div>
    </div>
   );
}
