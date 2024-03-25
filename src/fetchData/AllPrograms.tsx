import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllProgramsUrl } from "@/assets/urls/urls";

export const AllProgramsApi = createAsyncThunk(
    "programs/AllProgramsApi",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(AllProgramsUrl);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  