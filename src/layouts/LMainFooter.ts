import Vue from 'vue'
import { CreateElement, VNode } from 'vue/types/umd'
import classes from './LMainFooter.module.sass'

export default Vue.extend({
  name: 'LMainFooter',

  functional: true,

  render(h: CreateElement, { parent }): VNode | VNode[] {
    const vNodes = [h('router-view')]

    function createAnchorElement(
      href: string,
      placeholder: string,
      isBlank = true
    ) {
      return h(
        'a',
        {
          class: {
            [classes['lmf__footer__link']]: true
          },
          attrs: {
            href,
            target: isBlank ? '_blank' : '_self',
            rel: 'noopener noreferrer'
          }
        },
        placeholder
      )
    }

    const layoutPayload: Record<'sticky', boolean> = (parent.$route.meta || {})
      .layoutPayload
    if (layoutPayload && layoutPayload.sticky) {
      vNodes.push(
        h(
          'footer',
          {
            class: {
              [classes['lmf__footer']]: true
            }
          },
          [
            createAnchorElement(
              'https://github.com/lbwa/adminize',
              'Documentation'
            ),
            ` - Copyright © ${new Date().getFullYear()} `,
            createAnchorElement('https://set.sh', 'Bowen Liu'),
            ' - ',
            createAnchorElement(
              'https://github.com/lbwa/adminize/blob/master/CHANGELOG.md',
              'Changelog'
            )
          ]
        )
      )
    }

    return vNodes
  }
})
