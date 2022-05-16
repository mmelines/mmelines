export interface Resume {
  name: string;
  route: string;
  description: string;
  long_description: string;
}

export const resume = [
  {
    name: 'Education',
    route: '/education',
    description: 'Independent and Collegiate Coursework',
    long_description: '',
  },
  {
    name: 'Experience',
    route: '/experience',
    description: 'Programming Projects',
    long_description: '',
  },
  {
    name: 'Projects',
    route: '/projects',
    description: 'Independent Projects Across Disciplines',
    long_description: '',
  },
  {
    name: 'Extras',
    route: '/extras',
    description: 'Art, Writing, and Other Interests',
    long_description: '',
  },
  {
    name: 'Contact',
    route: '/contact',
    description: '',
    long_description: 'Call me, beep me if you want to reach me',
  },
];
