import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>
        <span style={{ marginRight: 40, marginLeft: 150 }}><Link to ='./tourism'> <img src="https://th.bing.com/th/id/OIP.0vY0p7BzDiXhWMOIUbssswHaEo?pid=ImgDet&rs=1" alt=""/></Link></span>
        <span style={{ top: 50, flex: 1, flexDirection: 'column', marginRight: 40 }} ><Link to ='./category/fitness' ><img src='https://th.bing.com/th/id/OIP.qaNU068Jj4sLvT-YIen9zgHaE8?pid=ImgDet&rs=1' alt='' width={200} height={200} /></Link></span>
        <span><Link to ='./technology'><img src='https://th.bing.com/th/id/OIP.LcvjG1FTHCPraYhwE086jgHaDt?pid=ImgDet&rs=1' alt='' width={200} height={200} /></Link></span>
        <h1 style={{ marginLeft: 100, marginTop: 20 }}>The Latest</h1>< hr style={{ width: 180, height: 3, marginLeft: 100, color: 'red' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div style={{ marginRight: 40, marginLeft: 120 }} ><Link to ='./fitness' ><img src='https://content.thriveglobal.com/wp-content/uploads/2019/06/active-activity-beautiful-2247179.jpg' alt='' width={300} height={300} /></Link></div>
          <div style={{ marginRight: 40, marginLeft: 40 }}><Link to ='./bollywood' ><img src='https://images.news18.com/ibnlive/uploads/2021/07/1625839961_farhan-akhtar.jpg' alt='' width={300} height={300}></img></Link></div>
          <div style={{ marginRight: 40, marginLeft: 40 }}><Link to ='./food' ><img src='https://www.bing.com/th?id=AMMS_f37d10e553fdf4f82693d306e45a6d4f&w=612&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1' alt='' width={300} height={300}></img></Link></div>
          <h3 style={{ marginRight: 40, marginLeft: 120, marginTop: 20 }}>Areobic</h3>
          <h3 style={{ marginRight: 40, marginLeft: 40, marginTop: 20 }}>Faran Aktar in Toofan</h3>
          <h3 style={{ marginRight: 40, marginLeft: 40, marginTop: 20 }}>Paneer tikka</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div style={{ height: 100, width: 200, marginRight: 40, marginLeft: 120, marginTop: 20 }}>Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness. It is usually performed to music and may be practiced in a group setting led by an instructor, although it can be done solo and without musical accompaniment.</div>
          <div style={{ height: 100, width: 200,marginRight: 40, marginLeft: 40, marginTop: 20 }}>Toofaan (transl.Storm) is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.</div>
          <div style={{ height: 100, width: 200,marginRight: 40, marginLeft: 40, marginTop: 20  }}>Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven. this is very delicious dish. every one like the recipe once tasted it. so don't forget to taste the recipe. It is good for health try it once never forget the taste.</div>
          
        </div>

      </div>



    </>

  )
}

export default Home