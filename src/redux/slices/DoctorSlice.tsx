import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
    name: string | null;
    isAuthenticated: boolean | null;
    role: string | null;
    id?: string | null;
  }

  const initialState: DoctorState = {
    name: null,
    isAuthenticated: null,
    role: null,
    id: null,
  };

  const Doctorslice = createSlice({
    name: "doctorSlice",
    initialState,
    reducers: {
      setDoctor: (state, action: PayloadAction<DoctorState>) => {
        return { ...state, ...action.payload };
        
      },
      // clearDoctor: () => initialState,
      clearDoctorDetials: (state) => {
        
        state.name = null
        
        state.role = null

        if (typeof window !== 'undefined') {
            localStorage.removeItem('doctor');
        }
    }
    },
  });
  
  export const { setDoctor, clearDoctorDetials } = Doctorslice.actions;
  export default Doctorslice.reducer;