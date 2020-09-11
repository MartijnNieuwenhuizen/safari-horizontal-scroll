import { enhance, handle } from '@grrr/hansel'
import { enhancer as observeScroll } from './observeScroll'
import { enhancer as moveOnScroll } from './moveOnScroll'

enhance(document.documentElement, {
  observeScroll,
  moveOnScroll,
})

handle(document.documentElement, {})
