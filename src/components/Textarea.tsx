'use client'

type Props = {
  label?: string
  name?: string
  rows?: HTMLTextAreaElement['rows']
}

export function Textarea({ label, name, rows = 4 }: Props) {
  return (
    <div>
      <label className="flex flex-col gap-2">
        {label && <div className="font-bold">{label}</div>}
        <textarea
          className="block rounded border border-gray-200 px-2 py-1"
          name={name}
          rows={rows}
        />
      </label>
    </div>
  )
}
