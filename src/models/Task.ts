interface Task {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface PatchTask {
  content: string;
  title: string;
  user_id: number;
}
