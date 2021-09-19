import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [],
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload.notes;
        }
    }
});

export const { setNotes } = noteSlice.actions;

export const selectNotes = state => state.user.notes;

export default noteSlice.reducer;