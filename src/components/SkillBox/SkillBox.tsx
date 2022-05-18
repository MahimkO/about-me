import './SkillBox.scss';
import type { Skills } from "../../data/skills";

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
            <li className='SkillBox__skill' key={skill.id}>{skill.name}</li>
          )
        }) }
      </ul>
    </div>
  );
}
