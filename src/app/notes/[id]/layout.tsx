import { Note } from '@/types/notes'
import Link from 'next/link'
import { DeleteNote } from './components/DeleteNote'

export default function NoteDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    id: Note['id']
  }
}) {
  return (
    <div className="flex grow flex-col">
      <div className="flex items-center justify-between border-b border-b-gray-300 bg-white px-4 py-2">
        <Link href="/notes">&lt; Go Back</Link>

        <DeleteNote id={params.id} />
      </div>

      <div className="grow">{children}</div>
    </div>
  )
}
