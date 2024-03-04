import { getNotes } from '@/actions/notes'
import { maybeEllipsize } from '@/utils'
import Link from 'next/link'
import React from 'react'

export default async function NoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const notes = await getNotes()

  return (
    <div className="flex grow">
      <div className="min-w-[200px] border-r border-r-slate-300 bg-white">
        <div>
          <Link href="/notes/create">
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 p-4 text-center text-white">
              + Create note
            </div>
          </Link>
        </div>

        <div>
          {notes.length ? (
            notes.map(note => {
              return (
                <Link key={note.id} href={`/notes/${note.id}`}>
                  <div className="border-b border-b-slate-300 px-8 py-4">
                    <div className="font-bold">{note.title}</div>
                    <div className="text-gray-500">
                      {maybeEllipsize(note.content, 20)}
                    </div>
                  </div>
                </Link>
              )
            })
          ) : (
            <div className="p-4">No notes yet!</div>
          )}
        </div>
      </div>

      <div className="flex grow flex-col">{children}</div>
    </div>
  )
}
