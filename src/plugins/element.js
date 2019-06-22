import { vueUsing } from 'UTILS'
import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Form,
  FormItem,
  Input,
  MessageBox,
  Message,
  Menu,
  Submenu,
  MenuItem,
  Scrollbar,
  Tooltip, // menu 折叠时，弹出的小提示
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'

// Prototype functions
Vue.prototype.$_plugins_messageBox = MessageBox
Vue.prototype.$_plugins_message = Message

// components using
vueUsing([
  Button,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Form,
  FormItem,
  Input,
  Menu,
  Submenu,
  MenuItem,
  Scrollbar,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem
])
