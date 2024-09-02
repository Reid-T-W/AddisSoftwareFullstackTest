import { ISong } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

interface updateSongApiCallInterface {
  id: string;
  values: ISong;
}

export const getSongsApiCall = (): Promise<ISong[]> => {
    return axiosInstance.get<ISong[]>(Endpoints.songs)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const addSongApiCall = (song: ISong): Promise<ISong> => {
    return axiosInstance.post<ISong>(Endpoints.songs, song)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const getSongDetailsApiCall = (songId: string): Promise<ISong> => {
  return axiosInstance.get<ISong>(`${Endpoints.songs}/${songId}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}

export const updateSongApiCall = (payload: updateSongApiCallInterface): Promise<ISong> => {
    return axiosInstance.put<ISong>(`${Endpoints.songs}/${payload.id}`, payload.values)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

export const deleteSongApiCall = (songId: string): Promise<ISong> => {
  return axiosInstance.delete<ISong>(`${Endpoints.songs}/${songId}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}

