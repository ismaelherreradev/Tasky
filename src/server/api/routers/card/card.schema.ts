import { z } from "zod";

export const ZCreateCard = z.object({
  title: z
    .string({ required_error: "Title is required", invalid_type_error: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters long." }),
  listId: z.number(),
});

export type TCreateCard = z.infer<typeof ZCreateCard>;
