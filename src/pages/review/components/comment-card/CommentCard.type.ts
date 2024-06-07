export interface IComment {
  commentId: number
  profileImg: string
  nickname: string
  date: string
  content: string
}

export interface ICommentProps {
  data: {
    commentId: number
    profileImg: string
    nickname: string
    date: string
    content: string
    reply?: IComment[]
  }
}
