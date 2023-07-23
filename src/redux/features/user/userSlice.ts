import { auth } from "../../../lib/firebase";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

declare module "firebase/auth" {
  interface User {
    updateProfile(profile: { displayName?: string | null }): Promise<void>;
  }
}

interface IUserState {
  user: any;
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  isError: false,
  error: null,
};

export interface ICredentials {
  email: string;
  password: string;
  displayName?: string;
}

export const createUser = createAsyncThunk(
  "/user/createUser",
  async ({ email, password, displayName }: ICredentials) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName });

    return userCredential.user;
  }
);

export const loginUser = createAsyncThunk(
  "/user/loginUser",
  async ({ email, password }: ICredentials) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { setUser, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
