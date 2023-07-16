// export interface IProduct {
//   _id: number;
//   name: string;
//   image: string;
//   price: number;
//   features: string[];
//   status: boolean;
//   rating: number;
//   quantity?: number;
// }

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
