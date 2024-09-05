import { IAlbum } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

// API call to get list of albums
export const getAlbumsApiCall = (): Promise<IAlbum[]> => {
    return axiosInstance.get<IAlbum[]>(Endpoints.albums)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

// API call to search albums
export const searchAlbumsApiCall = (searchTerm: string): Promise<IAlbum[]> => {
  return axiosInstance.get<IAlbum[]>(`${Endpoints.albums}?search=${searchTerm}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}