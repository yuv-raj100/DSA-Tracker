import logo from '../Images/rocket.png'


export default function Header(){
   
    return(
        <div className="header">
            
            <img src={logo} className='header-img'/>
            <h2>450 DSA Sheet</h2>
                
        </div>
    )
}