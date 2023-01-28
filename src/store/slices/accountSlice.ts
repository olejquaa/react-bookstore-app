import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { IAccount } from "types";
import { FirebaseErrorCode, getFBErrorMessage } from "utils";

const initialState: IAccount = {
  id: null,
  name: null,
  email: null,
  token: null,
  avatar: null,
  isAuth: false,
  error: null,
  registrationDate: null,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string; name: string },
  { rejectValue: string }
>("user/signUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    const userName = userCredential.user.displayName;
    return { userEmail, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const signInUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: string }
>("user/signInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
      state.registrationDate = payload.registrationDate;
      state.isAuth = true;
    },

    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },

    logOutUser: (state) => {
      state.isAuth = false;
    },

    getUserInfo: (state, { payload }) => {
      state.name = payload;
      state.email = payload;
      state.avatar = payload;
      state.token = payload;
      state.isAuth = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(signInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export default accountSlice.reducer;

export const { logOutUser, getUserInfo, setUser, removeUser } = accountSlice.actions;
