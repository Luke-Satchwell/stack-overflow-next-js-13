"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteracted(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    // get user
    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // find interactions for user and group by tags

    // interaction

    return [
      { _id: "1", name: "tag" },
      { _id: "2", name: "tag" },
      { _id: "3", name: "tag" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
