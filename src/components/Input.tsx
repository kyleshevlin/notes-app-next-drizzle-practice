'use client'

type Props = {
  label?: string
  name?: string
  type?: HTMLInputElement['type']
}

export function Input({ label, name, type = 'text' }: Props) {
  return (
    <div>
      <label className="flex flex-col gap-2">
        {label && <div className="font-bold">{label}</div>}
        <input
          className="block rounded border border-gray-200 px-2 py-1"
          type={type}
          name={name}
        />
      </label>
    </div>
  )
}
