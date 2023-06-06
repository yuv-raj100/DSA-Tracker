import React from "react"
import star from '../Images/star.png';
import notStar from '../Images/star-unchecked.png'
import { useContext } from 'react';
import { MyContext } from './Context/MyContext';
import gfg from '../Images/gfg.png'
import lc from '../Images/leetcode.png'


export default function Problem(props){

    const { xml, setXml } = useContext(MyContext);
    const [imp,setImp]=React.useState(props.starStat);

    var linkImg=props.url.includes("geeks")

    function toggleImp(e){
        setImp(s=>!s);
        localStorage.setItem(e+"imp",!imp);
        if(imp)
            localStorage.removeItem(e+"imp",imp)
    }


    const initialize={
        id:props.id,
        status:props.status
    };
   
    const [checked, setChecked] = React.useState(initialize)

    function toggleCheckboxChange(e){
        
        if (e.target.type === 'checkbox') {
            localStorage.setItem(e.target.id, e.target.checked );
            
            if(e.target.checked){
                setXml(prev=>{
                    console.log(prev)
                    return prev+1})
            }
            if(!e.target.checked){
                localStorage.removeItem(e.target.id,e.target.checked)
                setXml(prev=>(prev-1))
            }
        }
        setChecked(prevData=>{
            return {
                ...prevData,
                id:e.target.id,
                status:e.target.checked 
            }
        })
     }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="status"> <input
                            type="checkbox"
                            id={props.id}
                            name="status"
                            checked={checked.status}
                            onChange={toggleCheckboxChange}
                            />
                        </td>
                        <td className="star">{imp ?<img onClick={()=>toggleImp(props.id)} className="star-img" src={star}/>:<img onClick={()=>toggleImp(props.id)} className="star-img" src={notStar}/>}</td>
                        <td className="prob">{props.prob}</td>
                        <td className="link"><a href={props.url}>{linkImg?<img className="link-img" src={gfg} />:<img className="link-img" src={lc} />}</a></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}