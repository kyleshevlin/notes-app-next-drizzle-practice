'use client'

import React from 'react'

type Intent =
  /**
   * Use 'danger' when the action is destructive
   */
  | 'danger'
  /**
   * Default intent
   */
  | 'none'

type Status = 'default' | 'pending' | 'disabled'

function getWrap(intent: Intent, status: Status) {
  if (status === 'disabled') {
    return WrapDisabled
  }

  switch (intent) {
    case 'danger':
      return WrapDanger
    case 'none':
      return WrapDefault
  }
}

type Props = {
  children: React.ReactNode
  intent?: Intent
  onClick?: () => void
  status?: Status
  type?: HTMLButtonElement['type']
}

export function Button({
  children,
  intent = 'none',
  onClick,
  status = 'default',
  type = 'button',
}: Props) {
  const Wrap = getWrap(intent, status)

  const isDisabled = status !== 'default'

  return (
    <button aria-disabled={isDisabled} onClick={onClick} type={type}>
      <Wrap>
        <div className="relative">
          {/**
           * Don't remove the text, that will cause layout shift. Instead,
           * make it transparent
           */}
          <div className={status !== 'pending' ? '' : 'text-transparent'}>
            {children}
          </div>

          {status === 'pending' && (
            <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
              <Pending />
            </div>
          )}
        </div>
      </Wrap>
    </button>
  )
}

function Pending() {
  // TODO: add Spinner
  return <div className="text-white">Pending...</div>
}

function WrapDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-2 text-white">
      {children}
    </div>
  )
}

function WrapDanger({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-rose-500 to-rose-600 px-6 py-2 text-white">
      {children}
    </div>
  )
}

function WrapDisabled({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-gray-200 to-gray-300 px-6 py-2 text-white">
      {children}
    </div>
  )
}
