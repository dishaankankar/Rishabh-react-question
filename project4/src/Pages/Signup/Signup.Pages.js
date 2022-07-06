import {useNavigate} from 'react-router-dom';
const Signup=()=>{
    const navigate=useNavigate();


    const handleClick=()=>{
        navigate('/Career')
    }
    const handleClick1=()=>{
        navigate('/Blog')
    }
    const handleClick2=()=>{
        navigate('/About')
    }


    return(
        <div className='App-header3'>
            <center>
            <h1>Welcome , sign up to get the discount </h1>
            <button onClick={handleClick}>Want to go for Career Page</button><br></br>
            <button onClick={handleClick1}>Want to go for Blog Page</button><br></br>
            <button onClick={handleClick2}>Want to go for About Page</button>
            </center>
        </div>

    )
}
export default Signup;