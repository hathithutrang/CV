
const RankStar = ({number = 1}: {number: number}) => {

    const dotWhite = {
      width: 10,
      height: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      display: 'inline-block'
    }
  
    const dotYellow = {
      width: 10,
      height: 10,
      backgroundColor: '#f0ca0a',
      borderRadius: 10,
      display: 'inline-block'
    }
  
    const stars = [1,2,3,4,5];
  
    return (
      <div>
        {
          stars.map((star)=>{
            
            if(star > number){
              return (
                <span style={dotWhite}></span>
              )
            }else{
              return (
                <span style={dotYellow}></span>
              )
            }
            
          })
        }
        
      </div>
    )
  }
  
  export default RankStar