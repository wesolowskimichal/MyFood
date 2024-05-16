import React, { useMemo, useState } from 'react'
import { useUser } from '../../../../contexts/UserContext'
import { AccountDetails } from './accountDetails/AccountDetails'
import { LoginForm } from './forms/LoginForm'
import { RegisterForm } from './forms/RegitsterForm'
import { AccountRenderName, RenderObject } from '../../../../types/Types'
import { RenderService } from '../../../../services/render/RenderService'

export const Account = () => {
  const [render, setRender] = useState<AccountRenderName>('Login')
  const [renderObjects, setRenderObjects] = useState<RenderObject<AccountRenderName>[]>([])
  const { user } = useUser()

  useMemo(() => {
    const renderObjects: RenderObject<AccountRenderName>[] = [
      { renderName: 'Login', renderNode: <LoginForm setRender={setRender} /> },
      { renderName: 'Register', renderNode: <RegisterForm setRender={setRender} /> }
    ]
    setRenderObjects(renderObjects)
  }, [])

  return user ? <AccountDetails user={user} /> : <RenderService renderObjects={renderObjects} currentRender={render} />
}
