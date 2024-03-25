import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/Store";
import { CreateCohortUrl } from "@/assets/urls/urls";

export const CreateCohortApi = createAsyncThunk(
  "cohortData/CreateCohortApi",
  async (cohortData) => {
    try {   
      const response = await axios.post(CreateCohortUrl, cohortData);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
