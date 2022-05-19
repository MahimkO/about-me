import type { Work } from '../../data/works';

import './WorkBox.scss';

export function WorkBox({id, name, description, image, url} : Work) {  
  const handleClick = (url : string) => {
    window.location.replace(url);
  };
  
  return ( 
    <div onClick={() => handleClick(url)} key={id} className='WorkBox__container'>
      <div className='WorkBox__image_container'>
        <img className='WorkBox__image' src={image} alt=''></img>
      </div>
      <div className='WorkBox__info_container'>
        <p className='WorkBox__title'>{name}</p>
        <p className='WorkBox__description'>{description}</p>
      </div>
    </div>
  );
}
