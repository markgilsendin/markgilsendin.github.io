export const ROUTES = {
  HOME: { name: 'home', path: '/' },
  ALL_PROJECTS: { name: 'all-projects', path: '/all-projects' },
  CASE_STUDY: (id) => ({ name: 'case-study', params: { id }, path: `/project/${id}` }),
}