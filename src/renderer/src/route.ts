import { type RouteConfig } from '@mateothegreat/svelte5-router'

import Page1 from './Page1.svelte'
import Page2 from './Page2.svelte'

const routes: RouteConfig[] = [
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  }
]

export { routes }
