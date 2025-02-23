"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  let errors = [];
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  if (!title || !title.trim().length > 0) {
    errors.push("Title is required!");
  }

  if (!content || !content.trim().length > 0) {
    errors.push("Content is required!");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required!");
  }

  if (errors.length > 0) {
    return { errors };
  }

  redirect("/");
}
