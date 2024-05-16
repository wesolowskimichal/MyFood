import React, { Dispatch, SetStateAction, useState } from 'react'
import { RenderObject } from '../../types/Types'

type RenderProps = {
  renderObjects: RenderObject[]
  currentRender: string
}

export const RenderService = ({ renderObjects, currentRender }: RenderProps) => {
  const renderComponent = () => {
    const foundObject = renderObjects.find(obj => obj.renderName === currentRender)
    return foundObject ? foundObject.renderNode : null
  }

  return renderComponent()
}
