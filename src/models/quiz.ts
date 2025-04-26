
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type QuizType = {
  id: number,
  question: string
  quiz_choices: QuizChoiceType[]
  photo_path: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type QuizChoiceType = {
  id: number,
  choice: string,
  created_at: string,
  updated_at: string
}

export class Quiz {
  id: number
  question: string
  quiz_choices: QuizChoiceType[]
  photo_path: string

  constructor(props: QuizType) {
    this.id = props.id;
    this.question = props.question
    this.quiz_choices = props.quiz_choices
    this.photo_path = props.photo_path
  }
}
