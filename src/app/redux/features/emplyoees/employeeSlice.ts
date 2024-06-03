import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@/app/configration/api";
import { App } from "@/app/configration/api/config";
/*Initial State of the Application/*/
const initialState: any = {
  emp: null,
  loading: false,
  registerData:null,
  updateData:null,
  deleteData:null,
};

/*Define an impletentation function for Components Interaction*/

/*getEmployees*/
export const getEmployees :any = createAsyncThunk(
  "emp/getEmployees",
  async () => {
    let url = encodeURI(App.services.employees);
    return API.get(url, null, null, null);
  }
);


export const postEmployee :any = createAsyncThunk(
  "emp/postEmployee",
  async (data) => {
    let url = encodeURI(App.services.createEmployee);
    return API.post(url, data, null, null);
  }
);


export const updateEmployee :any = createAsyncThunk(
  "emp/updateEmployee",
  async (data) => {
    let url = encodeURI(App.services.updateEmployee);
    return API.put(url, data);
  }
);

export const deleteEmployee :any = createAsyncThunk(
  "emp/deleteEmployee",
  async (data) => {
    let url = encodeURI(App.services.deleteEmployee);
    return API.delete(url, data);
  }
);

/*Slice Of the Jobs*/
export const emps = createSlice({
  name: "emps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*GetClientStateUpdate*/
      .addCase(getEmployees.pending, (state) => {
        state.loading = false;
      })
      .addCase(getEmployees.fulfilled, (state, action: any) => {
        state.loading = true;
        console.log("action.payload",action.payload);
        
        state.emp = action.payload.data || null;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        // console.log("action.error.message",action.error.message);
        throw new Error(action.error.message);
      })
      
      /*GetClientStateUpdate*/
      .addCase(postEmployee.pending, (state) => {
        state.loading = false;
      })
      .addCase(postEmployee.fulfilled, (state, action: any) => {
        state.loading = true;
        console.log("action.payload",action.payload);
        
        state.registerData = action.payload.data || null;
      })
      .addCase(postEmployee.rejected, (state, action) => {
        state.loading = false;
        // console.log("action.error.message",action.error.message);
        throw new Error(action.error.message);
      }) 
       /*GetClientStateUpdate*/
       .addCase(updateEmployee.pending, (state) => {
        state.loading = false;
      })
      .addCase(updateEmployee.fulfilled, (state, action: any) => {
        state.loading = true;
        console.log("action.payload",action.payload);
        
        state.updateData = action.payload.data || null;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
        // console.log("action.error.message",action.error.message);
        throw new Error(action.error.message);
      })
      
      //delete

      .addCase(deleteEmployee.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteEmployee.fulfilled, (state, action: any) => {
        state.loading = true;
        console.log("action.payload",action.payload);
        
        state.deleteData = action.payload.data || null;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        // console.log("action.error.message",action.error.message);
        throw new Error(action.error.message);
      })
  },
});

// export const { addJob, updateSettings,refreshEmptyTabData } = jobs.actions;
export default emps.reducer;
