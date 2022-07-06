import {useNavigate} from 'react-router-dom'
const Blog=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/Career')
    }
    const handleClick1=()=>{
        navigate('/Signup')
    }
    const handleClick2=()=>{
        navigate('/About')
    }
    return(
        <div className='App-header'>
            <center>
            <h1>This Is our Blog Page </h1>
            <button onClick={handleClick}>Go for career Page</button><br></br>
            <button onClick={handleClick1}>Go for Signup Page</button><br></br>
            <button onClick={handleClick2}>Go for About Page</button>
            </center>
        </div>
    )
}
export default Blog;