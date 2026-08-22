export const ROUTES = {
  HOME: { name: 'home', path: '/' },
  ALL_PROJECTS: { name: 'all-projects', path: '/all-projects' },
  CASE_STUDY: (id) => ({ name: 'case-study', params: { id }, path: `/project/${id}` }),

  SECTIONS: {
    ABOUT: { id: 'about', path: '/', hash: '#about' },
    PROJECTS: { id: 'projects', path: '/', hash: '#projects' },
    EXPERIENCE: { id: 'experience', path: '/', hash: '#experience' },
    SKILLS: { id: 'skills', path: '/', hash: '#skills' },
    CONTACT: { id: 'contact', path: '/', hash: '#contact' },
  }
}