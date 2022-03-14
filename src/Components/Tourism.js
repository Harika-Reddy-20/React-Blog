import React from 'react'
import { Outlet } from 'react-router'

const Tourism = () => {
  return (
    <>
      <h1>Tourism</h1>
      <div style={{ display: 'flex', flex: 'wrap' }}>
        <span>
          <span><img src='https://th.bing.com/th/id/R.71114cc429987f168b1b196980e4a500?rik=A%2bdvghH3SSORjg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fcqmpGqQ.jpg&ehk=7bCV%2bNwXKVo2KV8ugI%2fzAK4ltNIoYFntxYUgZZtYYPE%3d&risl=&pid=ImgRaw&r=0' alt='' width={250} height={200} /></span>
          <br />
          <span ><b>Kerala:God's Own Country</b>  </span>
          <span >
            <p>Kerala is a state on the Malabar Coast of India. It was formed on 1
              November 1956, following the passage of the States Reorganisation Act,
              by combining Malayalam-speaking regions of the erstwhile regions of
              Cochin, Malabar, South Canara, and Travancore.</p>
          </span>
        </span>
        <span>

          <span><img src='https://www.tripsavvy.com/thmb/7Hte7f5Pp9x_Y8CJluVDvRO56Us=/2121x1414/filters:fill(auto,1)/GettyImages-668729904-591e90f25f9b58f4c0615ea0.jpg' alt='' width={250} height={200} /></span>
          <br />
          <span><b>Madhya Pradesh</b>  </span>
          <span>
            <p>Kerala is a state on the Malabar Coast of India. It was formed on 1
              November 1956, following the passage of the States Reorganisation Act,
              by combining Malayalam-speaking regions of the erstwhile regions of
              Cochin, Malabar, South Canara, and Travancore.</p></span>
        </span>
        <span>
          <span><img src='https://th.bing.com/th/id/R.f10a6bbde9457a12ea4732f440cdd197?rik=M9AwgeYYzuyLsg&riu=http%3a%2f%2fwww.thehistoryhub.com%2fwp-content%2fuploads%2f2014%2f04%2fHampi-Chariot.jpg&ehk=MX5BNohAmJnqbpQiCNi9qn%2fg%2fGeP4wF7LIiyhuF5Ixo%3d&risl=&pid=ImgRaw&r=0' alt='' width={250} height={200} /></span>
          <br />
          <span><b>Hampi</b>  </span>
          <span>
            <p>Kerala is a state on the Malabar Coast of India. It was formed on 1
              November 1956, following the passage of the States Reorganisation Act,
              by combining Malayalam-speaking regions of the erstwhile regions of
              Cochin, Malabar, South Canara, and Travancore.</p></span>
        </span>

      </div>

      <Outlet />
    </>
  )
}

export default Tourism