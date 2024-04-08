interface Post {
  body: string;
  post_id: number;
  status: string;
  title: string;
  user_id: number;
  updated_at: string;
  created_at: string;
}
interface PatchPost {
  body: string;
  status: string;
  title: string;
  user_id: number;
}
