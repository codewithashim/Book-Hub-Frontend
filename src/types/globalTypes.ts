export interface IReview {
  _id: string;
  comment: string;
  user: {
    userName: string;
    userProfile: string;
  };
}

export interface IBook {
  _id: string;
  title: string;
  email: string;
  description: string;
  author: string;
  genre: string;
  publicationYear: string;
  image: string;
  reviews: IReview[];
}

export interface IBookCardProps {
  book: IBook;
}

export interface IRecentBookCardProps {
  book: IBook;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  role?: string;
  password: string;
  confirmPassword: string;
}
