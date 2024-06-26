import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aioutput',{
    id:serial('id').primaryKey(),
    formaData:varchar('formaData').notNull(),
    airesponse:text('airesponse'),
    templateslug:varchar('templateslug').notNull(),
    createdby:varchar('createdby').notNull(),
    createdAt:varchar('createdAt').notNull(),


})