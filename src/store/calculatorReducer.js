import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    expression: '',
    result: 0,
    initial: true,
    calculated: false,
  },
  reducers: {
    add: (state, action) => {
      if (state.initial) {
        state.expression = '';
        state.result = 0;
        state.initial = false;
      }else if(state.calculated){
        state.expression = state.result.toString();
        state.result = 0;
        state.calculated = false;
      }
      state.expression += action.payload;
      // console.log('expression: ' + state.expression);
    },
    clear: (state) => {
      state.expression = '';
      state.result = 0;
      state.initial = true;
      state.calculated = false;
      // console.log('expression: ' + state.expression);
    },
    calculate: (state) => {
      try {
        state.result = eval(state.expression);
        state.calculated = true;
      }
      catch (error) {
        state.result = "Wrong expression!";
        state.initial = true;
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { add, clear, calculate } = calculatorSlice.actions

export default calculatorSlice.reducer