import React, { FC, Fragment, ProviderExoticComponent } from 'react'

type Components = [ProviderExoticComponent<any>, Record<string, any>]

interface Props {
  components: Components[]
  children: any
}

export const Compose: FC<Props> = ({ components, children }) => (
  <Fragment>
    {components.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr) ? [curr[0], curr[1]] : [curr, {}]
      return <Provider {...props}>{acc}</Provider>
    }, children)}
  </Fragment>
)
