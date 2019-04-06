export default {
  name: 'ItemTitle',
  functional: true,
  props: {
    icon: {
      type: String,
      // 在父级组件中判断为根路由是才存在默认图标
      // Only root routes has a default icon
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    if (icon) {
      vnodes.push(<i class={icon} />)
    }

    if (title) {
      vnodes.push(
        <span class="menu__item__title" slot="title">
          {title}
        </span>
      )
    }

    return vnodes
  }
}
