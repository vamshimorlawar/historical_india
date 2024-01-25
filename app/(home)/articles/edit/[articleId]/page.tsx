import React from 'react'

const ArticleEditor = ({params}:{
  params: {
    id: string,
  }
}) => {
  return (
    <div>Article Editor {params.id}</div>
  )
}

export default ArticleEditor;