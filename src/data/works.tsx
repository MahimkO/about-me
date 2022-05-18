export type Work = {
  id: number;
  name: string;
  description: string;
  url: string;
};

export type Works = Work[];

export const works = [
  {
    id: 1,
    name: 'GetPet',
    description: 'Site for getting or selling pets',
    url: 'http://ya.ru',
  },
  {
    id: 2,
    name: 'Sunrise',
    description: 'Site about something special',
    url: 'http://google.com',
  },
  {
    id: 3,
    name: 'My own project',
    description: 'Basically site for training skills',
    url: 'http://vk.com',
  },
];
