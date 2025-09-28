"use client";
import PostForm from '@/components/PostForm/PostForm';
import { createPost } from '@/actions/Posts/posts';

export default function NewPostPage() {
  return <PostForm createPost={createPost} />;
}
