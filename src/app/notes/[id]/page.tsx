import { getNote } from '@/actions/notes'
import { Note } from '@/types/notes'

export default async function NotesDetailPage({
  params,
}: {
  params: { id: Note['id'] }
}) {
  const note = await getNote({ id: params.id })

  if (!note) return <div>TODO: 404</div>

  return (
    <div className="flex grow flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <div>{note.content}</div>
    </div>
  )
}
