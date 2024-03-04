'use server'

import { db } from '@/db/drizzle'
import { notes } from '@/db/schema'
import type { Note } from '@/types/notes'
import { asc, eq } from 'drizzle-orm'

export async function getNotes() {
  return await db.select().from(notes).orderBy(asc(notes.createdAt))
}

export async function getNote({ id }: Pick<Note, 'id'>) {
  const selected = await db.select().from(notes).where(eq(notes.id, id))
  return selected.at(0)
}

export async function createNote({
  title,
  content,
}: Pick<Note, 'title' | 'content'>) {
  return await db.insert(notes).values({ title, content }).returning()
}

type Update = {
  id: Note['id']
  content?: Note['content']
  title?: Note['title']
}

export async function updateNote({ id, ...update }: Update) {
  return await db.update(notes).set(update).where(eq(notes.id, id))
}

export async function deleteNote({ id }: Pick<Note, 'id'>) {
  return await db.delete(notes).where(eq(notes.id, id))
}
