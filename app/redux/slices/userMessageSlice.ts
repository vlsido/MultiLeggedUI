import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";

interface UserMessage {
  text: string;
  type: "INFO" | "ERROR";
}

export interface UserMessageState {
  message: UserMessage;
}

const initialState: UserMessageState = {
  message: { text: "", type: "INFO" },
};

export const userMessageSlice = createSlice({
  name: "userMessage",
  initialState,
  reducers: {
    showUserMessage: (state, action: PayloadAction<UserMessage>) => {
      state.message = action.payload;
    },
    clearUserMessage: (state) => {
      state.message = { text: "", type: "INFO" };
    },
  },
});

export const { showUserMessage, clearUserMessage } =
  userMessageSlice.actions;

export const selectUserMessage = (state: RootState) =>
  state.userMessage.message;

export default userMessageSlice.reducer;
