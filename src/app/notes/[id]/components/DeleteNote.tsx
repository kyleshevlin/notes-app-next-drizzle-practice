'use client'

import { deleteNote } from '@/actions/notes'
import { Button } from '@/components/Button'
import { useBool } from '@/hooks/useBool'
import { Note } from '@/types/notes'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

export function DeleteNote({ id }: { id: Note['id'] }) {
  const router = useRouter()
  const [isPending, setIsPending] = useBool(false)

  function handleDelete() {
    const confirmed = confirm('Are you sure you want to delete this note?')

    if (confirmed) {
      setIsPending.on()

      deleteNote({ id })
        .then(() => {
          router.push('/notes')
          revalidatePath('/notes')
        })
        .catch(console.error)
        .finally(() => {
          setIsPending.off()
        })
    }
  }

  return (
    <Button
      intent="danger"
      onClick={handleDelete}
      status={isPending ? 'pending' : 'default'}
    >
      Delete Note
    </Button>
  )
}
