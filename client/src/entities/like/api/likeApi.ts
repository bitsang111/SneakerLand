import { AxiosResponse } from "axios"
import axiosInstance from "../../../services/axiosInstance";
import { Like, LikeWithoutIdAndUserId } from "../types/likeTypes";
import { SneakerId } from "../../sneakers/types/sneakerType";




class LikeApi{
    static getAllLike = async (): Promise<Like[]> =>{
        try {
            const  response: AxiosResponse<{message:"success"; likes: Like[]}>=
            await axiosInstance.get('/likes')
            return response.data.likes
        } catch (error) {
            throw new Error('no success');
        }

    }

    static createLike = async (body:LikeWithoutIdAndUserId ): Promise<Like> => {
        console.log(body, 'wwww');
        
        const response: AxiosResponse<{ message: string; like: Like   }> = await axiosInstance.post(
          '/likes',
          body,
        );
        return response.data.like
      };

      static deleteLike = async (id:LikeWithoutIdAndUserId ): Promise<SneakerId | string> =>{
        const response: AxiosResponse<{message: string}> = await axiosInstance.delete(`likes/${id}`)
        console.log(response,'qqqqqqqqqqqqq');
        
        if (response.data.message === 'успешно удалено') {
            return  +id ;
      }

      return 'не твоя вот и бесишься';
}
}
export default LikeApi