export interface Chapter {
  id: string
  publication_id: number,
  index: number,
  title: string,
  body: string,
  created_at?: Date,
  updated_at?: Date,
}
