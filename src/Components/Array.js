
import data from '../450'
import Problem from "./Problem";
import React from 'react'
import Progress_bar from './Progress_bar'
import { useContext } from 'react';
import { MyContext } from './Context/MyContext';



export default function Array(props){
    
    const { xml, setXml } = useContext(MyContext);
    var len=0;
    var start=0;
    var chk=false;
    for(var i=0;i<data.length;i++){
        if(chk===false && data[i]["Topic:"]===props.type){
            start=i;
            chk=true;
        }
        if(data[i]["Topic:"]===props.type)
            len++;
    }

    const oldData=data.slice(start,start+len);
    var j=0;

    const updated=oldData.map(s=>{
        if(s["Topic:"]===props.type){
            j++;
            s.id=`${props.type}${j}`;
            return s;
        }
    })

    var c=0;
    const newData=updated.map(s=>{
        const data=localStorage.getItem(s.id);
        const impData=localStorage.getItem(s.id+"imp")
        var ans=data===null?false:data==='false'?false:true
        var imp=impData===null?false:impData==='false'?false:true
        if(ans===true)
            c++;
     
        return <Problem     topic={s['Topic:']}
                            prob={s['Problem: ']}
                            url={s.URL}
                            id={s.id}
                            status={ans}
                            starStat={imp}
                            key={s.id}
                />
    })

    setXml(c);
    console.log(xml)
  
    return(
        <div>
            <Progress_bar bgcolor="#48C78E" progress={Math.round(c/len*100)} total={len} done={c} height={30} />
            <div className='table-container'>
                <table>
                    <thead className='thead'>
                        <tr>
                            <th className='status'>Status</th>
                            <th className='star'>Star</th>
                            <th className='prob'>Problem</th>
                            <th className='link'>Link</th>
                        </tr>
                    </thead>
                </table>
            {newData}
            </div>
        </div>
    )
}