import React from 'react'
import { Textbox, TextboxProps } from '../Textbox'
import { styles } from './style'

export const AuthInput = (props: TextboxProps) => (
  <Textbox fit customContainerStyles={styles.container} {...props} />
)
