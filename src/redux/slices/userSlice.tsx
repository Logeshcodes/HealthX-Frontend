
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
    userId: string | null,
    email: string | null,
    role: string | null,
    isBlocked: boolean | null,
}

// Initialize state
const initialState: User = {
    userId: null,
    email: null,
    role: null,
    isBlocked: null

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            const { userId,email, role , isBlocked } = action.payload;

                state.userId = userId,
                state.email = email,
                state.role = role,
                state.isBlocked = isBlocked

            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(state));
            }
        },

        clearUserDetials: (state) => {
            state.userId = null
            state.email = null
            state.role = null
            state.isBlocked = null

            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
            }
        }
    }
})

export const { setUser, clearUserDetials } = userSlice.actions
export default userSlice.reducer