import { X } from 'phosphor-react-native'
import React from 'react'
import { Modal as RNModal, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { Color } from '~/assets/theme/color/color'

import { styles } from './style'

interface ModalProps {
  title: string
  onClose: () => void
  children: React.ReactNode
  actionButtons?: Array<React.ReactNode>
  visible: boolean
}
/**
 * A classic fully controlled modal component with action buttons
 * @param title
 * @param onClose
 * @param children
 * @param actionButtons
 * @param visible
 * @returns
 */
export function Modal({ title, onClose, children, actionButtons, visible }: ModalProps) {
  return (
    <RNModal
      visible={visible}
      style={styles.modal}
      onRequestClose={onClose}
      // deviceWidth={deviceWidth}
      // deviceHeight={deviceHeight}
    >
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X color={Color.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {actionButtons && actionButtons.length > 0 && (
          <View style={styles.buttonContainer}>{actionButtons}</View>
        )}
      </View>
    </RNModal>
  )
}
