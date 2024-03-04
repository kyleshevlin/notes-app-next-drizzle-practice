import { CreateNoteForm } from './components/CreateNoteForm'

export default function CreateNote() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">Create Note</h2>
      <CreateNoteForm />
    </div>
  )
}
