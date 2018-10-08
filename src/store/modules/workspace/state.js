export default {
  init: false,
  currentUser: {
    name: 'default user',
    avatar: '',
    token: '001',
    notify: 10,
    position: 'front end developer',
    department: 'github'
  },
  projects: [
    {
      id: 'xxx1',
      title: 'Vue.js',
      logo: '',
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      updatedAt: new Date(),
      member: '科学搬砖组',
      href: '',
      memberLink: ''
    }
  ],
  activities: [
    {
      user: {
        name: 'Bowen',
        avatar: ''
      },
      updateAt: +new Date(),
      group: {
        name: 'Github',
        link: 'https://github.com/lbwa'
      },
      project: {
        name: 'Vue Design Pro',
        link: 'https://github.com/lbwa/vue-design-pro'
      },
      template: '在 @{group} 新建项目 @{project}'
    }
  ],
  radar: [],
  teams: [
    {
      name: '科学搬砖组',
      avatar: ''
    }
  ]
}
