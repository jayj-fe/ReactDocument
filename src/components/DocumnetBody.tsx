import React, { useEffect, useState } from "react"
import usePostImfomation from "../stores/postInfomation"
import axios from "axios";
import {marked} from "marked";
import ReactMarkdown from 'react-markdown'

function DocumentBody() {
  const { usePostInfomation } = usePostImfomation(); 
  const [ postData, setPostData ] = useState('');

  useEffect(()=>{
    if(usePostInfomation.fileUrl !== ''){
      fileLoder(usePostInfomation.fileUrl)
    }
  }, [usePostInfomation])

  const fileLoder = (url) => {
    axios.get(url).then((response) => {
      setPostData(response.data);
    });
  }

  return (
    <>
      <section className="DocumentBody">
        DocumentBody

        <hr />
        <h1>{usePostInfomation.postTitle}</h1>
        {/* <ReactMarkdown source={postData} /> */}
        <div dangerouslySetInnerHTML={{ __html: marked(postData) }} />
      </section>
    </>
  )
}

export default DocumentBody
