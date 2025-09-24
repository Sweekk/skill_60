"use client"
function Stuff({brand,img,price,onBorrowClick}){
    return  <div style = {{
                display: 'flex', 
                flexDirection: 'row',
                fontSize: '20px',
                height:"190px",
                width: '450px', 
                backgroundColor: '#c7b8b8ff',
                borderRadius:'20px',
                padding: '10px',
                margin:"10px"
      }}>
        <img src = {img}
        padding-top = "10px"
        width = "200px"
        height = "100px"
        alt = {brand}
        />
        <div style = {{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div style = {{
          marginLeft: '20px',
          fontFamily: 'cursive',
          fontSize: '15px',
          fontColor: '#0c0c0cff ',
        }}>
          {brand}
        
        </div>
        <div style = {{
          marginLeft: '20px',
          fontColor: '#0c0c0cff ',
          fontFamily: 'cursive',
          fontSize: '15px',
        }}>
          {price}
        </div>
        <button style={{
                    marginLeft: '20px',
                    backgroundColor:'red',
                     height:"50px",
                     width: "150px",
                     color:"white",
                     marginTop:"20px",
                     borderRadius:"25px"}}
                    
                     
                     onClick={(clicked)=> onBorrowClick()}
                     >
                    Add to Cart
                </button>
                      </div>
                </div>
     
    
      
}

export default Stuff;