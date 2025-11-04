import {
  pgTable,
  integer,
  varchar,
  boolean,
  timestamp,
  decimal,
} from "drizzle-orm/pg-core";

export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull(),
});

// При любых изменениях снача меняем/добавляем схему
// генерируем npx drizzle-kit generate  - сгенерирует скрипты в папку drizzle
// мигрируем npx drizzle-kit migrate  -внесет изменения в базу данных

export const events = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const workshops = pgTable("workshops", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  price: decimal().notNull(),
  isPublished: boolean().default(true),
  datetime: timestamp().notNull(),
});
