
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const AddingUser = createAsyncThunk('user/AddingUser', async(AdedUser,{rejectWithValue})=>{
   try {
    // send HTTP Requests
    const {data} = await axios.post('/api/users/',AdedUser)
    // data (res from the server) bsh tethat f payload taa action (AddingUser) ==> Store
    return data 
   } catch (error) {
    return rejectWithValue(error.response.data.message)
   }
})


export const getAllDataUSers = createAsyncThunk('user/getAllDataUSers', async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/users/')
        return data

    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
}) 

export const DeletingUser = createAsyncThunk('user/DeletingUser', async(id,{rejectWithValue})=>{
    try {
        const {data} = await axios.delete(`/api/users/${id}`)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const UpdatingUser = createAsyncThunk('user/UpdatingUser', async(userUpdated,{rejectWithValue})=>{
    try {
        const {data} = await axios.put(`/api/users/${userUpdated._id}`,userUpdated)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


const UserSlice = createSlice({
    name:'user',
    initialState:{
        users:[],
        User:{},
        isLoading:false,
        Errors: null,
        msg:null
    },
    reducers:{
    },
    extraReducers:{
        [AddingUser.pending]:(state) =>{
            state.isLoading = true
        },
        [AddingUser.fulfilled]: (state,action)=>{
            state.isLoading= false
            state.User = action.payload
            //state.msg = action.payload.msg
        },
        [AddingUser.rejected]:(state,action) =>{
            state.Errors = action.payload
        },
        [getAllDataUSers.pending]: (state)=>{
            state.isLoading = true
        },
        [getAllDataUSers.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.users = action.payload
            console.log(action.payload);
        },
        [getAllDataUSers.rejected]: (state,action)=>{
            state.Errors = action.payload
        },
        [DeletingUser.pending]: (state)=>{
            state.isLoading = true
        },
        [DeletingUser.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.msg = action.payload.msg
            state.users = state.users.filter(user=> user._id !== action.payload.deletedUser._id )
        },
        [DeletingUser.rejected]: (state,action)=>{
            state.Errors = action.payload
        },
        [UpdatingUser.pending]: (state)=>{
            state.isLoading = true
        },
        [UpdatingUser.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.users = state.users.map(user=> (user._id == action.payload._id)? {...user,...action.payload} : user )
        },
        [UpdatingUser.rejected]: (state,action)=>{
            state.Errors = action.payload
        }
    }
})

export default UserSlice.reducer

