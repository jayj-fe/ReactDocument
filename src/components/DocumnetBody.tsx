import React, { useEffect, useState } from "react"
import usePostImfomation from "../stores/postInfomation"
import Markdown from 'markdown-to-jsx';

function DocumentBody() {
  const { usePostInfomation } = usePostImfomation(); 
  const [ postData, setPostData ] = useState('');

  useEffect(()=>{
    if(usePostInfomation.fileUrl !== ''){
      fileLoder(usePostInfomation.fileUrl)
    }
  }, [usePostInfomation])

  const fileLoder = (url) => {
    console.log(url)
    import(url)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPostData(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  }

  return (
    <>
      <section className="DocumentBody">
        DocumentBody

        <hr />
        <h1>{usePostInfomation.postTitle}</h1>
        <section id="post-wrapper">
          <Markdown children={postData} />
        </section>
      </section>
    </>
  )
}

export default DocumentBody
