import GenericText from '@app/components/GenericText'
import { IComment } from '@interfaces/comment'
import React from 'react'

interface Props {
  comments: IComment[]
}

function Comments({ comments }: Props) {
  return (
    <GenericText>
      Comments {comments.length}
    </GenericText>
  )
}

export default Comments
