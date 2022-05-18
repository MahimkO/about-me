export type Skill = {
  id: number;
  name: string;
};

export type Skills = Skill[];

export const frontendSkills : Skills = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Redux'
  },
  {
    id: 3,
    name: 'Redux-thunk'
  },
  {
    id: 4,
    name: 'SASS/SCSS'
  },
  {
    id: 5,
    name: 'LESS'
  },
  {
    id: 6,
    name: 'Ant-design'
  },
  {
    id: 7,
    name: 'Material UI'
  },
  {
    id: 8,
    name: 'Bootstrap'
  },
  {
    id: 9,
    name: 'HTML5'
  },
  {
    id: 10,
    name: 'CSS3'
  },
];

export const backendSkills : Skills = [
  {
    id: 1,
    name: 'Node.JS'
  },
  {
    id: 2,
    name: 'Express'
  },

];

export const databasesSkills : Skills = [
  {
    id: 1,
    name: 'Prizma'
  },
  {
    id: 2,
    name: 'GraphQL'
  },
  {
    id: 3,
    name: 'PostgresQL'
  },
  {
    id: 4,
    name: 'Sequelize'
  },
];
