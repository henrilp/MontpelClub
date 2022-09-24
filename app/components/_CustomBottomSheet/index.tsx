import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

interface CustomBottomSheetProps {
  children: React.ReactNode
  bottomSheetRef?: React.Ref<any>
  snapPoints?: any[]
  index?: number // controls the initial position of the bottom sheet
}
const CustomBottomSheet = ({ children, bottomSheetRef, snapPoints }: CustomBottomSheetProps) => (
  <BottomSheet
    backgroundStyle={{ borderRadius: 25 }}
    enablePanDownToClose
    ref={bottomSheetRef}
    snapPoints={snapPoints || ['80%']}
    children={children}
  />
)
export default CustomBottomSheet
