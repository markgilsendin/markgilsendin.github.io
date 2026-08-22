export const ROUTES = {
  HOME: { name: 'home', path: '/' },
  ALL_PROJECTS: { name: 'all-projects', path: '/all-projects' },
  CASE_STUDY: { 
    name: 'case-study', 
    path: '/project/:id',
    getRoute: (id) => ({ name: 'case-study', params: { id } })
  },

  SECTIONS: {
    ABOUT: { id: 'about', path: '/', hash: '#about' },
    PROJECTS: { id: 'projects', path: '/', hash: '#projects' },
    EXPERIENCE: { id: 'experience', path: '/', hash: '#experience' },
    SKILLS: { id: 'skills', path: '/', hash: '#skills' },
    CONTACT: { id: 'contact', path: '/', hash: '#contact' },
  }
}