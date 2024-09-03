import { IArtist } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

export const getArtistsApiCall = (): Promise<IArtist[]> => {
    return axiosInstance.get<IArtist[]>(Endpoints.artists)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const searchArtistsApiCall = (searchTerm: string): Promise<IArtist[]> => {
  return axiosInstance.get<IArtist[]>(`${Endpoints.artists}?search=${searchTerm}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}