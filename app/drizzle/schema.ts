import { relations } from "drizzle-orm";
import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user",{
    id:serial("id").primaryKey(),
    name:varchar("name"),
    email:varchar("email").unique().notNull()
})

export const book = pgTable("book",{
    id:serial("id").primaryKey(),
    name:varchar("title"),
    author:varchar("author"),
    imageUrl:varchar("image"),
})