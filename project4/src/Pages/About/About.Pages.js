import {useNavigate} from 'react-router-dom'
const About=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/Career')
    }
    const handleClick1=()=>{
        navigate('/Signup')
    }
    const handleClick2=()=>{
        navigate('/Blog')
    }
    return(
        <div className='App-header2'>
            <center>
            <h1>Welcome to About page , Here you will see about our website </h1>
            <button onClick={handleClick}>Go for career Page</button><br></br>
            <button onClick={handleClick1}>Go for Signup Page</button><br></br>
            <button onClick={handleClick2}>Go for Blog Page</button>
            </center>
        </div>
    )
}
export default About;