const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'React',
  'Vue',
  'Webpack'
]

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png' // Webpack
]

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png'
]

const fetchProjects = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: ''
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2018-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: ''
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: ''
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2018-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: ''
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '专注于前端发展',
    updatedAt: new Date('2018-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: ''
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2018-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: ''
  },
]

const fetchActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/'
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/'
    },
    template: '在 @{group} 新建项目 @{project}'
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1]
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/'
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/'
    },
    template: '在 @{group} 新建项目 @{project}'
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2]
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/'
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/'
    },
    template: '在 @{group} 新建项目 @{project}'
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4]
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/'
    },
    template: '将 @{project} 更新至已发布状态'
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3]
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/'
    },
    comment: {
      name: '留言',
      link: 'http://github.com/'
    },
    template: '在 @{project} 发布了 @{comment}'
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5]
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/'
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/'
    },
    template: '在 @{group} 新建项目 @{project}'
  },
]

const fetchTeam = []
let i = 0
fetchProjects.forEach(project => {
  fetchTeam.push({
    name: project.member,
    avatar: avatars[i++]
  })
})

module.exports = {
  fetchProjects,
  fetchActivities,
  fetchTeam
}
