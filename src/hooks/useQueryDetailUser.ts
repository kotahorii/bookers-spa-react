import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { ResUpdateDetailUser, User } from 'types/userTypes'

const getUser = async (id: number | undefined) => {
  const { data } = await client.get<ResUpdateDetailUser>(`users/${id}`)
  return data.user
}

export const useQueryDetailUser = (id: number | undefined) => {
  return useQuery<User, Error>({
    queryKey: 'detailUser',
    queryFn: () => getUser(id),
    staleTime: 0,
  })
}
