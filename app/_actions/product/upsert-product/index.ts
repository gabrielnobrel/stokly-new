"use server";

import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";
import { db } from "@/app/_lib/prisma";
import { actionClient } from "@/app/_lib/safe-action";

export const upsertProduct = actionClient
  .schema(upsertProductSchema)
  .action(async ({ parsedInput: { id, ...data } }) => {
    upsertProductSchema.parse(data);
    await db.product.upsert({
      where: {
        id: id ?? "",
      },
      update: data,
      create: data,
    });

    revalidatePath("/products");
  });

// export const upsertProduct = async (data: UpsertProductSchema) => {
//   upsertProductSchema.parse(data);
//   await db.product.upsert({
//     where: {
//       id: data?.id ?? "",
//     },
//     update: data,
//     create: data,
//   });

//   revalidatePath("/products");
// };
