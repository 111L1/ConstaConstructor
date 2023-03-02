import React, { FC, useLayoutEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import {
  ButtonElementPropsStyles,
  ElementTypes,
  FormElementTypes,
  IFormElementButton,
} from '../../../store/formElements/types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ formElement }) => {
  const [buttonProps, setButtonProps] = useState<ButtonElementPropsStyles | undefined>()

  useLayoutEffect(() => {
    const btnFormElement = formElement as IFormElementButton
    setButtonProps(btnFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Button}
    >
      <Button {...buttonProps?.constaProps} />
    </SelectableLayer>
  )
}
