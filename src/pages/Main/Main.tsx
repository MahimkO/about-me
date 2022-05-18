import { backendSkills, databasesSkills, frontendSkills, PlanToLearn } from '../../data/skills';
import { works } from '../../data/works';

import { SkillBox } from '../../components/SkillBox';
import { WorkBox } from '../../components/WorkBox';

import './Main.scss';

export function Main() {
  return ( 
    <div className='Main__container'>
      
      <div className='Main__hello_container'>
        <div className='Main__hello_image_container'>
          <img className='Main__hello_image' src='ava.jpg' alt='me'></img>
        </div>
        <div className='Main__hello_info_container'>
          <div className='Main__hello_info_name'>Hello, I'm Max!</div>
          <p className='Main__hello_info_position'>Javascript frontend web-developer</p>
          <p className='Main__hello_info_position_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iusto voluptatum deserunt? Provident illo quia enim nobis laborum nulla labore ullam, maiores cupiditate vitae amet fuga laboriosam magnam id deleniti.</p>
          <div className='Main__hello_contacts'>
            <div className='Main__hello_contacts_contact'>
              <svg xmlns="http://www.w3.org/2000/svg" className='Main__hello_info_icons'><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
              <span>Phone: </span>
              <a href='tel:+79060641234'>+7 (906) 064-1234</a>
            </div>
            <div className='Main__hello_contacts_contact'>
              <svg xmlns="http://www.w3.org/2000/svg" className='Main__hello_info_icons'><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
              <span>E-mail: </span>
              <a href='mailto:mahimko@gmail.com'>mahimko@gmail.com</a>
            </div>
            <div className='Main__hello_contacts_contact'>
              <svg xmlns="http://www.w3.org/2000/svg" className='Main__hello_info_icons'><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>  
              <span>Address: </span>
              <span>Moscow, Baryshikha st. 30 </span>
            </div>
            <div className='Main__hello_contacts_contact'>
              <svg xmlns="http://www.w3.org/2000/svg" className='Main__hello_info_icons'><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-4.588 15-2.449-1.288L9.514 19l.468-2.728L8 14.342l2.738-.398 1.225-2.48 1.225 2.48 2.738.398-1.981 1.931.467 2.727zM19 9H5V7h14v2z"></path></svg>
              <span>Date of birth: </span>
              <span>28.06.1984</span>
            </div>
            <div className='Main__hello_contacts_contact'>
              <svg xmlns="http://www.w3.org/2000/svg" className='Main__hello_info_icons'><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
              <span>GitHub: </span>
              <a href='https://github.com/MahimkO' rel='noreferrer' target='_blank'>My GitHub page</a>
            </div>
          </div>
          <div className='Main__hello_info_btn_container'>
            <input className='Main__hello_info_button' type='button' value='Download CV' />
          </div>
        </div>
        <div className='Main__hello_empty'></div>
      </div>

      <div className='Main__skills_container'>
        <p className='Main__skills_title'>Hard skills and development</p>
        <p className='Main__skills_text'>And some plans to learn something new and especially helpful</p>
        <div className='Main__skills'>
          <SkillBox title='Frontend' skills={frontendSkills}/>
          <SkillBox title='Backend' skills={backendSkills}/>
          <SkillBox title='Databases' skills={databasesSkills}/>
          <SkillBox title='Plan to learn' skills={PlanToLearn}/>
        </div>
      </div>

      <div className='Main__works_container'>
        <p className='Main__works_title'>My Works</p>
        <p className='Main__works_description'>This section is for getting more clearly what is my main point on develop</p>
        <div className='Main__works_works'>
          {works.map(work => {
            return (
              <WorkBox key={work.id} id={work.id} name={work.name} description={work.description} url={work.url}/>
            )
          })}
        </div>
      </div>

    </div>
   );
}
