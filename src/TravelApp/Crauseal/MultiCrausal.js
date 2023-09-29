import React from 'react'
import Craousal from './Craousal'

function MultiCrausal() {
    const breakPoints =[
        { width:1 ,itemToShow :1  },
        { width:550 ,itemToShow :2  },
        { width:768 ,itemToShow :3 },
        { width:1200 ,itemToShow :4  },

    ]
  return (
    <div>
        <Craousal>
            
        </Craousal>
      
    </div>
  )
}

export default MultiCrausal
