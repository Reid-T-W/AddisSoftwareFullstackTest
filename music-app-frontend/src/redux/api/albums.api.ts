import { IAlbum } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

export const getAlbumsApiCall = (): Promise<IAlbum[]> => {
    return axiosInstance.get<IAlbum[]>(Endpoints.albums)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}