import { boolean, decimal, integer, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user",{
    id:serial("id").primaryKey(),
    name:varchar("name"),
    email:varchar("email").unique().notNull(),
    createdAt:timestamp("createdAt").defaultNow()
})

export const book = pgTable("book",{
    id:serial("id").primaryKey(),
    name:varchar("title").notNull(),
    author:varchar("author"),
    isFree:boolean("isFree").default(false),
    pdfUrl:varchar("pdf").notNull(),
    imageUrl:varchar("image"),
    createdAt:timestamp("createdAt").defaultNow(),
    price:decimal("price"),
    user_id:integer("user_id").notNull().references(()=> user.id)
})