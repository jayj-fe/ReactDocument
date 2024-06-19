import React from "react"
import usePostImfomation from "../stores/postInfomation"

function DocumentBody() {
  const { usePostInfomation } = usePostImfomation(); 

  return (
    <>
      <section className="DocumentBody">
        DocumentBody

        <hr />
        <h1>{usePostInfomation.postTitle}</h1>
      </section>
    </>
  )
}

export default DocumentBody
