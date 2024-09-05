import { ISong } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

interface updateSongApiCallInterface {
  id: string;
  values: ISong;
}

// API call to get list of songs
export const getSongsApiCall = (): Promise<ISong[]> => {
    return axiosInstance.get<ISong[]>(Endpoints.songs)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

// API call to add a song
export const addSongApiCall = (song: ISong): Promise<ISong> => {
    return axiosInstance.post<ISong>(Endpoints.songs, song)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

// API call to get song details
export const getSongDetailsApiCall = (songId: string): Promise<ISong> => {
  return axiosInstance.get<ISong>(`${Endpoints.songs}/${songId}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}

// API call to update song
export const updateSongApiCall = (payload: updateSongApiCallInterface): Promise<ISong> => {
    return axiosInstance.put<ISong>(`${Endpoints.songs}/${payload.id}`, payload.values)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}

// API call to delete a song
export const deleteSongApiCall = (songId: string): Promise<ISong> => {
  return axiosInstance.delete<ISong>(`${Endpoints.songs}/${songId}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}

// API call to get search songs
export const searchSongsApiCall = (searchTerm: string): Promise<ISong[]> => {
  return axiosInstance.get<ISong[]>(`${Endpoints.songs}?search=${searchTerm}`)
  .then((response)=>{
      return response.data
  }).catch((error) => {
    throw(error)
  })
}


