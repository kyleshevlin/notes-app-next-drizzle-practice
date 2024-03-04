import React from 'react'

export function useBool(initialState = false) {
  const [state, setState] = React.useState(initialState)

  const handlers = React.useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState(s => !s),
      reset: () => setState(initialState),
    }),
    [initialState],
  )

  return [state, handlers] as const
}
