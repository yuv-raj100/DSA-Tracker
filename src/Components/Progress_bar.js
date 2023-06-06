import React from 'react'
import { useContext } from 'react';
import { MyContext } from './Context/MyContext';


const Progress_bar = ({bgcolor,progress,total,done,height}) => {

    const { xml, setXml } = useContext(MyContext);
     
    const Parentdiv = {
        height: height,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }

    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${xml}/${total}`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;