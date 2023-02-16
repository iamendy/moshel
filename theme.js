import { extendTheme } from '@chakra-ui/react'
import { accordionTheme } from './Accordion_theme'

export const theme = extendTheme({
  components: { Accordion: accordionTheme },
})