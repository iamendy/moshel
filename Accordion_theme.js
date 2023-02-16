import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  button: {
    borderTopWidth: 0,
    border: 'none',
    py: "5"
  },
  container: {
    borderTopWidth: 0,
    _last: {
      borderBottomWidth: 0,
    }
  }
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })