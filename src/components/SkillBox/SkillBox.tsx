import type { Skills } from "../../data/skills";

import './SkillBox.scss';

type Props = {
  title: string;
  skills: Skills;
};

export function SkillBox({title, skills} : Props) {
  return ( 
    <div>
      <p className='SkillBox__title'>{title}</p>
      <ul className='SkillBox__skills'>
        { skills.map(skill => {
          return (
            <div className='SkillBox__skill' key={`${title}-${skill.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className='SkillBox__skill_svg'><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
              <li className='SkillBox__skill_title'>{skill.name}</li>
            </div>
          )
        }) }
      </ul>
    </div>
  );
}
