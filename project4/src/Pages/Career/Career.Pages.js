import {useNavigate} from 'react-router-dom'
const Career=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/Blog')
    }
    const handleClick1=()=>{
        navigate('/Signup')
    }
    const handleClick2=()=>{
        navigate('/About')
    }
    return(
        <div className='App-header1'>
            <center>
            <h1>Welcome to  Career Page, Here we will give you Jobs</h1>
            <button onClick={handleClick}>Go for Blog Page</button><br></br>
            <button onClick={handleClick1}>Go for Signup Page</button><br></br>
            <button onClick={handleClick2}>Go for About Page</button>
            </center>
        </div>
    )
}
export default Career;