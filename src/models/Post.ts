interface Post {
  post_id: number;
  title: string;
  body: string;
  user_id: number;
  status: string;
  created_at: string;
  updated_at: string;
}
interface PatchPost {
  title: string;
  body: string;
  user_id: number;
  status: string;
}
