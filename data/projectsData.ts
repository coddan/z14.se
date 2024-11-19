interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Some tool or project',
    description: `Work Work Work.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
