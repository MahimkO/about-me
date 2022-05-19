export type Work = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export type Works = Work[];

export const works = [
  {
    id: 1,
    name: 'GetPet',
    description: 'Site for getting or selling pets',
    image: '/dog1.jpg',
    url: 'https://get-pet-app.herokuapp.com/',
  },
  {
    id: 2,
    name: 'Sunrise',
    description: 'Site about something special',
    image: '/cat1.jpg',
    url: 'http://google.com',
  },
  {
    id: 3,
    name: 'My own project',
    description: 'Basically site for training skills',
    image: '/dog1.jpg',
    url: 'http://vk.com',
  },
];
