import React, { useCallback } from 'react'
import RnRangeSlider from 'rn-range-slider'
import { Label } from './components/Label'
import Rail from './components/Rail'
import RailSelected from './components/RailSelected'
import Thumb from './components/Thumb'

interface Props {
  onValueChanged: (low: number, high: number) => void
  stepLabels: string[]
}
/**
 * A range slider view. The package "rn-range-slider" is 31kB heavy
 * @param stepLabels array of labels for each step
 */
export const RangeSlider = ({ stepLabels, onValueChanged }: Props) => {
  const renderThumb = useCallback(() => <Thumb />, [])
  const renderRail = useCallback(() => <Rail />, [])
  const renderRailSelected = useCallback(() => <RailSelected />, [])
  const renderLabel = useCallback(
    (value: number) => <Label text={stepLabels[value]} />,
    [stepLabels],
  )
  // steps are label indexes
  return (
    <RnRangeSlider
      min={0}
      max={stepLabels.length - 1}
      step={1}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      onValueChanged={onValueChanged}
      renderLabel={renderLabel}
      minRange={1}
    />
  )
}
