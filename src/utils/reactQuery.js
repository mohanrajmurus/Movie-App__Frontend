import axios from "./axios"
import { useQuery } from "react-query"

export const getAllMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get(`/allmovies`)
      return data
    },
  })
}

export const getMovieById = (id) => {
  return useQuery({
    queryKey: ["movie",id],
    queryFn: async () => {
      const { data } = await axios.get(`/movie/${id}`)
      return data
    },
  })
}
export const createAccount = async(user) => {
  const {data} = await axios.post(`/user`,user)
  return data
}
export const loginAccount = async(user) => {
  const {data} = await axios.post(`/user/login`,user)
  return data
}
export const deleteMovie = async (id) => {
  const { data } = await axios.delete(`/movie/${id}`)
  return data
}
export const addNewMovie = async (moviedata) => {
  const { data } = await axios.post(`/addmovie`, moviedata)
  return data
}
