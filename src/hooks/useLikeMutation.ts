import client from 'lib/api/client'
import { useMutation } from 'react-query'
import { Like, ResCreateLike } from 'types/types'

export const useLikeMutation = () => {
  const createLikeMutation = useMutation((data: Like) =>
    client.post<ResCreateLike>('likes', data)
  )
  return { createLikeMutation }
}
