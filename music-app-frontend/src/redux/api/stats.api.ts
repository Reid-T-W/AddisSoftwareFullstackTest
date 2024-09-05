import { IStats } from "../../types"
import { Endpoints } from "../../utils/constants/endpoints"
import { axiosInstance } from "./base.api"

// API call to get stats
export const getStatsApiCall = (): Promise<IStats> => {
    return axiosInstance.get<IStats>(Endpoints.stats)
    .then((response)=>{
        return response.data
    }).catch((error) => {
      throw(error)
    })
}