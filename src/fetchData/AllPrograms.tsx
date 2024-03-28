import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {AllProgramsUrl} from "@/assets/urls/urls";

export const AllProgramsApi = createAsyncThunk(
    "programs/AllProgramsApi",
    async (_, { rejectWithValue }) => {
        try {
            const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIiwiZXhwIjoxNzExNjE3MjgxfQ.Op4k1YfiHEROfUhgrGc9sCsCWn-aiqhXSkr1XNSQWb4eTB4uRGFiCqGAZpKDqClbRNSUBZ8ZGvRBQ_lmF68UwQ";
            const response = await axios.get(AllProgramsUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log("This is the program --->", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching programs:", error);
            return rejectWithValue(error.message);
        }
    }
);
