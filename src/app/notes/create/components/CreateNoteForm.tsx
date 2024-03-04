'use client'

import { createNote } from '@/actions/notes'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Textarea } from '@/components/Textarea'
import { useBool } from '@/hooks/useBool'
import { useRouter } from 'next/navigation'

export function CreateNoteForm() {
  const router = useRouter()
  const [isPending, setIsPending] = useBool(false)

  function handleAction(data: FormData) {
    const { title, content } = Object.fromEntries(data.entries())

    setIsPending.on()
    createNote({ title: title as string, content: content as string })
      .then(result => {
        const [note] = result
        router.push(`/notes/${note.id}`)
      })
      .catch(console.error)
      .finally(() => {
        setIsPending.off()
      })
  }

  return (
    <form action={handleAction} className="flex flex-col gap-4">
      <Input label="Title" name="title" />
      <Textarea label="Content" name="content" />
      <Button type="submit" status={isPending ? 'pending' : 'default'}>
        Create
      </Button>
    </form>
  )
}
