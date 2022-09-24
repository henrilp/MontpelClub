import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '~/assets/theme/color/color'
import { commonValues } from '~/assets/theme/common'
import { CTAButton } from '~/components/CTAButton'
import { AuthenticatedNavigationProp } from '~/stacks/Authenticated'
import { staticSteps, useFormStore } from '~/store/form.store'
import { BudgetView } from './components/BudgetView'
import { CardField } from './components/CardField'
import { DestinationView } from './components/DestinationView'
import { DurationView } from './components/DurationView'
import { FormModal } from './components/FormModal'
import { TravelersView } from './components/TravelersView'

/**
 * Main Form (accordeon style)
 */
export const MainFormView = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<AuthenticatedNavigationProp>()
  // we encapsulate the form state and intelligence in a store, even though it's not necessary
  const {
    // main form view
    cardFieldValues,
    validatedFields,
    stepIndex,
    setStepIndex,
    goNext,
    goBack,
    // destinationView
    departure,
    setDeparture,
    destination,
    setDestination,
    // calendarView
    startDay,
    setStartDay,
    endDay,
    setEndDay,
    // travelersView
    adults,
    setAdults,
    children,
    setChildren,
    // budgetView
    low,
    setLow,
    high,
    setHigh,
    localizedStepLabels,
  } = useFormStore()

  // we manually inject props bc children of a modal can't access the same store as the rest of the render tree.
  const stepViews = useMemo(
    () => [
      <DestinationView
        departure={departure}
        setDeparture={setDeparture}
        destination={destination}
        setDestination={setDestination}
      />,
      <DurationView
        startDay={startDay}
        setStartDay={setStartDay}
        endDay={endDay}
        setEndDay={setEndDay}
      />,
      <TravelersView
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      />,
      <BudgetView
        low={low}
        setLow={setLow}
        high={high}
        setHigh={setHigh}
        localizedStepLabels={localizedStepLabels}
      />,
    ],
    [
      departure,
      setDeparture,
      destination,
      setDestination,
      startDay,
      setStartDay,
      endDay,
      setEndDay,
      adults,
      setAdults,
      children,
      setChildren,
      low,
      setLow,
      high,
      setHigh,
      localizedStepLabels,
    ],
  )

  // MODAL INTELLIGENCE
  //*********   https://jeremybarbet.github.io/react-native-modalize/#/
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<Modalize>(null)
  const openModal = () => {
    setIsModalOpen(true)
    modalRef.current?.open()
  }
  const onModalClose = () => {
    setIsModalOpen(false)
    setStepIndex(-1)
  }
  useEffect(() => {
    // we have to track state of the modal unless we want to "fake open" it when switching step (it would work tho)
    if (!isModalOpen && stepIndex !== -1) {
      openModal()
    }
  }, [stepIndex, isModalOpen])

  return (
    <SafeAreaView style={styles.container}>
      <FormModal
        onClose={onModalClose}
        modalRef={modalRef}
        goNext={goNext}
        goBack={goBack}
        isFirst={stepIndex === 0}
        headerLabel={
          // see dict, we build header label from step key
          stepIndex !== -1
            ? t('mainForm.' + staticSteps[stepIndex]?.key + 'Header' || '')
            : undefined
        }
        // is last if all fields are validated
        isLast={validatedFields.every((b) => b)}>
        {
          // @ts-ignore
          stepIndex !== -1 && stepViews[stepIndex]
        }
      </FormModal>

      {staticSteps.map((step, index) => (
        <CardField
          key={index}
          onPress={() => setStepIndex(index)}
          label={t('mainForm.' + step.key)}
          Icon={step.Icon}
          value={cardFieldValues[index]}
          validated={validatedFields[index]}
        />
      ))}
      <View style={styles.bottomContent}>
        <CTAButton
          backgroundColor={Color.neonBlue}
          textColor={Color.black}
          onPress={() => navigation.navigate('Swipe')}
          text={t('mainForm.surpriseMe')}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: commonValues.paddingHorizontal,
  },
  bottomContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})
