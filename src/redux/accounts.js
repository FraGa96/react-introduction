import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";


export const accountSlice = createSlice({
  name: 'accounts',
  initialState: [
    { id: '123', total: 0, name: 'Default' },
    { id: '456', total: 0, name: 'Bank 1' },
  ],
  reducers: {
    addAccount: (state, action) => (
      [
        ...state,
        {
          id: nanoid(),
          ...action.payload
        },
      ]
    ),
  }
});

export const { addAccount } = accountSlice.actions;

export const accountsReducer = accountSlice.reducer;


// const ADD_ACCOUNT = 'ADD_ACCOUNT';

// const INITIAL_STATE = [];

// export const addAccount = createAction(ADD_ACCOUNT, ({ name, total }) => (
//   {
//     payload: {
//       name,
//       id: nanoid(),
//       total,
//     }
//   })
// )

// export const accountsReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder
//     .addCase(addAccount, (state, action) => [
//       ...state,
//       action.payload
//     ]);
// });
