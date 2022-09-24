import { Backpack, Calendar, CreditCard, Planet } from 'phosphor-react-native'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DateData } from '~/interfaces/date.interface'
import { Place } from '~/interfaces/place.interface'

interface StaticStep {
  key: 'destination' | 'duration' | 'budget' | 'travelers'
  Icon: any
}
export const staticSteps: StaticStep[] = [
  {
    key: 'destination',
    Icon: Planet,
  },
  {
    key: 'duration',
    Icon: Calendar,
  },
  {
    key: 'travelers',
    Icon: Backpack,
  },
  {
    key: 'budget',
    Icon: CreditCard,
  },
]
// used for budget
// maybe do exponential ?
const stepLabels = [
  '0',
  '50',
  '100',
  '150',
  '200',
  '250',
  '300',
  '350',
  '400',
  '450',
  '500',
  '550',
  '600',
  '650',
  '700',
  '750',
  '800',
  '850',
  '900',
  '950',
  '1000',
  '1050',
  '1100',
  '1150',
  '1200',
  '1250',
  '1300',
  '1350',
  '1400',
  '1450',
  '1500',
  '1550',
  '1600',
  '1650',
  '1700',
  '1750',
  '1800',
  '1850',
  '1900',
  '1950',
  '2000',
  '2050',
  '2100',
  '2150',
  '2200',
  '2250',
  '2300',
  '2350',
  '2400',
  '2450',
  '2500',
  '2550',
  '2600',
  '2650',
  '2700',
  '2750',
  '2800',
  '2850',
  '2900',
  '2950',
  '3000',
  '3050',
  '3100',
  '3150',
  '3200',
  '3250',
  '3300',
  '3350',
  '3400',
  '3450',
  '3500',
  '3550',
  '3600',
  '3650',
  '3700',
  '3750',
  '3800',
  '3850',
  '3900',
  '3950',
  '4000+',
]

/**
 * Store responsible for the authentication
 * @returns
 */
export function useFormStore() {
  const { t, i18n } = useTranslation()

  // Destination View
  const [departure, setDeparture] = useState<Place | undefined>()
  const [destination, setDestination] = useState<Place | undefined>()

  // Duration View
  const [startDay, setStartDay] = useState<DateData | undefined>()
  const [endDay, setEndDay] = useState<DateData | undefined>()

  // Travelers View
  const [adults, setAdults] = useState<number>(1)
  const [children, setChildren] = useState<number>(0)

  // Budget View

  //// localize step labels
  const currency = useMemo(() => {
    return i18n.language === 'fr' ? '€' : '$'
  }, [i18n.language])

  const localizedStepLabels = useMemo(() => {
    return stepLabels.map((label) => {
      if (currency === '€') {
        return `${label}${currency}`
      }
      return `${currency}${label}`
    })
  }, [currency])
  //// these are indexes of amount declared in localizedStepLabels
  const [low, setLow] = useState<number>(0)
  const [high, setHigh] = useState<number>(stepLabels.length - 1)

  // Form card fields
  const [stepIndex, setStepIndex] = useState<number>(-1) // -1 means no step is selected
  const initialCardFieldValues = useMemo(
    () => [
      t('mainForm.flexible'),
      t('mainForm.edit'),
      t('mainForm.addTravelers'),
      t('mainForm.edit'),
    ],
    [t],
  )
  const [validatedFields, setValidatedFields] = useState<boolean[]>([false, false, false, false])
  const updateValidatedFields = useCallback(
    (index: number, value: boolean) => {
      if (validatedFields[index] !== value) {
        const newValidatedFields = [...validatedFields]
        newValidatedFields[index] = value
        setValidatedFields(newValidatedFields)
      }
    },
    [validatedFields],
  )
  // goNext and goBack are used to navigate between steps AND validate fields
  const goBack = useCallback(() => {
    stepIndex > 0 && setStepIndex(stepIndex - 1)
  }, [stepIndex])

  const goNext = useCallback(() => {
    // if "go next" from first or second view, field  is validated ("flexible")
    if (stepIndex === 0 || stepIndex === 2 || stepIndex === 3) {
      updateValidatedFields(stepIndex, true)
    }
    stepIndex < staticSteps.length - 1 && setStepIndex(stepIndex + 1)
  }, [stepIndex, updateValidatedFields])

  const [cardFieldValues, setCardFieldValues] = useState<string[]>(initialCardFieldValues)
  const updateCardFieldValues = useCallback(
    (index: number, value: string) => {
      if (cardFieldValues[index] !== value) {
        const newCardFieldValues = [...cardFieldValues]
        newCardFieldValues[index] = value
        setCardFieldValues(newCardFieldValues)
      }
    },
    [cardFieldValues],
  )

  // MAIN FORM state hook : update and validate cardFields if state changes
  useEffect(() => {
    // field 0
    if (destination) {
      // field is validated in "goNext"
      updateCardFieldValues(0, destination.display)
    } else if (!destination) {
      updateCardFieldValues(0, initialCardFieldValues[0])
    }
    // field 1
    if (startDay && endDay) {
      updateValidatedFields(1, true)
      updateCardFieldValues(
        1,
        `${startDay.day}/${startDay.month}/${startDay.year} - ${endDay.day}/${endDay.month}/${endDay.year}`,
      )
    } else if (!startDay || !endDay) {
      updateValidatedFields(1, false)
      updateCardFieldValues(1, initialCardFieldValues[1])
    }
    // field 2
    if (adults > 0 || children > 0) {
      // field is validated in "goNext"
      const labels = []
      adults && labels.push(adults.toString() + ' ' + t('mainForm.adult' + (adults > 1 ? 's' : '')))
      children &&
        labels.push(children.toString() + ' ' + t('mainForm.child' + (children > 1 ? 'ren' : '')))
      // @ts-ignore
      updateCardFieldValues(2, labels.join(', '))
    } else if (adults === 0 && children === 0) {
      updateValidatedFields(2, false)
      updateCardFieldValues(2, initialCardFieldValues[2])
    }
    // field 3
    // field is validated in "goNext"
    updateCardFieldValues(3, `${localizedStepLabels[low]} - ${localizedStepLabels[high]}`)
  }, [
    t,
    initialCardFieldValues,
    updateValidatedFields,
    updateCardFieldValues,
    destination,
    startDay,
    endDay,
    adults,
    children,
    low,
    high,
    localizedStepLabels,
  ])
  return {
    cardFieldValues,
    validatedFields,
    stepIndex,
    setStepIndex,
    goNext,
    goBack,

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
  }
}

export type FormStore = ReturnType<typeof useFormStore>

export const FormStoreContext = createContext<FormStore>(null as any)
