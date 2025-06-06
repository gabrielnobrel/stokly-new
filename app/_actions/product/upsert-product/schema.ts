import { z } from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome do produto é obrigatório" }),
  price: z.number().min(0.01, { message: "O preço do produto é obirgatório" }),
  stock: z.coerce.number().int().min(0, {
    message: "O estoque é obrigatório",
  }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
