import { ArrowLeft, ArrowRight } from 'phosphor-react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

interface FormModalProps {
  modalRef: React.RefObject<Modalize>
  onClose: () => void
  children: React.ReactNode
  goBack: () => void
  goNext: () => void
  isFirst: boolean
  isLast: boolean
  headerLabel?: string
}

/**
 * Bottom sheet modal that goes above the tab bar and adapted to content
 * We need "Portal" to be above the tab bar (see "Host" in App.tsx)
 * Scrollable content needs to be managed to not interfere with the modal
 * MODAL CONTENT IS A SCROLLVIEW
 * /!\ /!\ /!\ THIS MODAL and its children ARE IN A PORTAL, they don't have access to store /!\
 * => we need to pass all the props we need manually :/
 * https://jeremybarbet.github.io/react-native-modalize/#/EXAMPLES
 * @returns
 */
export const FormModal = ({
  modalRef,
  onClose,
  children,
  goBack,
  goNext,
  isFirst,
  isLast, // if all fields are validated, the 'next' button becomes 'send
  headerLabel,
}: FormModalProps) => {
  const { t } = useTranslation()
  return (
    <Portal>
      <Modalize
        adjustToContentHeight
        onClose={onClose}
        // this allows us to tap a suggestion directly in the autocomplete
        // whithout needing to close keyboard first
        scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
        HeaderComponent={<Text style={styles.headerLabel}>{headerLabel}</Text>}
        FooterComponent={
          <View style={styles.footer}>
            {!isFirst && (
              <TouchableOpacity style={styles.goBack} onPress={goBack}>
                <ArrowLeft />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.goNext} onPress={goNext}>
              <Text style={styles.next}>{isLast ? t('send') : t('next')}</Text>
              <ArrowRight />
            </TouchableOpacity>
          </View>
        }
        ref={modalRef}>
        {children}
      </Modalize>
    </Portal>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: 'relative',
    height: 50,
  },
  goBack: {
    position: 'absolute',
    left: 20,
  },
  goNext: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  next: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginRight: 10,
  },
  headerLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
    fontFamily: 'Value-Bold',
  },
})
