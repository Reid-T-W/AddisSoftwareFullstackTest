import { IGenre } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

// API call to get list of genres
export const getGenresApiCall = (): Promise<IGenre[]> => {
    return axiosInstance.get<IGenre[]>(Endpoints.genres)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

// API call to search genres
export const searchGenresApiCall = (searchTerm: string): Promise<IGenre[]> => {
  return axiosInstance.get<IGenre[]>(`${Endpoints.genres}?search=${searchTerm}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}