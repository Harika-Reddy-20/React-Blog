import React from 'react'

const Technology = () => {
  return (
    <>
      <h1>Technology</h1>
      <div style={{ display: 'flex', flex: 'wrap' }}>
        <span>
          <span><img src='https://th.bing.com/th/id/OIP.zQ0n_qCjMIYDF_hbd9bYJQHaE8?pid=ImgDet&rs=1' alt='' width={250} height={200} /></span>
          <br />
          <span ><b>IOT</b>  </span>
          <span >
            <p>There are many technologies that enable the IoT. Crucial to the field is the network used to communicate between devices
               of an IoT installation, a role that several wireless or wired technologies</p>
          </span>
        </span>
        <span>

          <span><img src='https://th.bing.com/th/id/OIP.KeF6JasZLDD4ultyOumqZwHaD_?pid=ImgDet&rs=1' alt='' width={250} height={200} /></span>
          <br />
          <span><b>AI/ML</b>  </span>
          <span>
            <p>Machine learning (ML) is the study of computer algorithms that can improve automatically through experience 
              and by the use of data. It is seen as a part of artificial intelligence.</p></span>
        </span>
        <span>
          <span><img src='https://th.bing.com/th/id/OIP.UZS9xEQOLf1b8PZgJP9MqgHaEK?pid=ImgDet&rs=1' alt='' width={250} height={200} /></span>
          <br />
          <span><b>Data Science</b>  </span>
          <span>
            <p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge
               and actionable insights from data across a broad range of application domains.</p></span>
        </span>

      </div>
    </>
  )
}

export default Technology