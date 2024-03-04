import { text, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('createdAt', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull(),
})
