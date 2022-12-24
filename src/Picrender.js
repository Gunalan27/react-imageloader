const Picrender=(props)=>{
    return(
        <div className="img-list">
            {props.image.map((single,index)=>{
                if(single.image!=='')
                return(
                    <div><img src={single.image} className="im" alt={index} /></div>
                );
            })
            }
        </div>
    );
}

export default Picrender;