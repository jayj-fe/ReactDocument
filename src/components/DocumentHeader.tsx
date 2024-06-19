import React from "react"
import { postList } from "../posts/postList"
import usePostImfomation from "../stores/postInfomation"

function DocumentHeader() {
  const { usePostInfomation, setUsePostInfomation } = usePostImfomation(); 
  return (
    <section className="DocumentHeader">
      DocumentHeader
      <hr />
      {
        postList.map((el, idx) => {
          return(
            <article key={idx}>
              <h3>{el.depthName}</h3>
              <ul>
                {
                  el.depthPosts.map((ele, eleIdx) => {
                    return (
                      <li key={eleIdx} className={`${usePostInfomation.postTitle === ele.postTitle ? 'on' : ''}`}>
                        <button
                          type="button"
                          onClick={ (e) => setUsePostInfomation(ele) }
                          >{ele.postTitle}</button>
                      </li>
                    )
                  })
                }
              </ul>
            </article>
          )
        })
      }
    </section>
  )
}

export default DocumentHeader
