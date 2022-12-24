import React,{useState} from 'react';
import Picrender from './Picrender';
// import ImageView from './ImageView';

const Image=()=>{
    const [imageinput1,setImageinput1]=useState("");
    const [imageinput2,setImageinput2]=useState("");
    const [imageinput3,setImageinput3]=useState("");
    let [image,setImage]=useState([]);
    const [sub,setSub]=useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('red');
        setImage([{image:imageinput1},{image:imageinput2},{image:imageinput3}]);
        setSub(true);
      }
        return(
            <div className='form'>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="form-group">
                    <label htmlFor=""><h5>Image URL 1</h5></label>
                    <input type="text" name="" id="url1" value={imageinput1} 
                        onChange={(e)=>{setImageinput1(e.target.value)}} 
                            className='form-control' placeholder='Enter the Image URL 1' />
                    </div>
                    <div className="form-group">
                    <label htmlFor=""><h5>Image URL 2</h5></label>
                    <input type="text" name="" id="url2" value={imageinput2} 
                        onChange={(e)=>{setImageinput2(e.target.value)}} 
                        className='form-control' placeholder='Enter the Image URL 2'/>
                    </div>
                    <div className="form-group">
                    <label htmlFor=""><h5>Image URL 3</h5></label>
                    <input type="text" name="" id="url3" value={imageinput3} 
                        onChange={(e)=>{setImageinput3(e.target.value)}} 
                            className='form-control' placeholder='Enter the Image URL 3'/>
                    </div>
                    <button type="submit" id='sub'  >Create</button>
                </form>
                {sub&&<div className="heading"><h1>Image List</h1></div>}
                <Picrender image={image}/>
                {/* onClick={()=> {<ImageView image={image}/>;console.log('image called');}} */}
           </div>
        );
       
    }

export default Image;