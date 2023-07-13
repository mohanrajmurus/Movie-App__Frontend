import axios from "./axios"
import { useQuery } from "react-query"
const url = API__URL

export const getAllMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/allmovies`)
      return data
    },
  })
}

export const getMovieById = (id,token) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const config = {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      const { data } = await axios.get(`${url}/movie/${id}`,config)
      return data
    },
  })
}
export const createAccount = async(user) => {
  const {data} = await axios.post(`${url}/user`,user)
  return data
}
export const loginAccount = async(user) => {
  const {data} = await axios.post(`${url}/user/login`,user)
  return data
}
export const deleteMovie = async (id) => {
  const { data } = await axios.delete(`${url}/movie/${id}`)
  return data
}
export const addNewMovie = async (obj) => {
  const {token} = obj
  const movie = {
    title: obj.title,
    genre: obj.genre,
    description: obj.description,
    thumbnail: obj.thumbnail,
    imageURL: obj.imageURL,
    videoURL: obj.videoURL,
  }
  
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const { data } = await axios.post(`${url}/addmovie`, movie,config)
  return data
}