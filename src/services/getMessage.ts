import type { Message } from "@/models/message";
import { myFetcher, type ResponseType } from "@/utils/myFetcher";

export const getMessage = async (token: string): Promise<ResponseType<Message>> => {
  return await myFetcher(`http://localhost:80/api/guests/${token}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
