let slider;
let q
let w
let tot
function setup() {
  createCanvas(1000, 1000);
  slider = createSlider(0, 100, 10);
  slider.position(10, 10);
}

function draw() {
  let val = slider.value();
  for(let i=0; i<4; i++){
  q=random(1)
  w=random(1)
  stroke((q+w)/1*200,(q+w)/4*200,(q+w)/2*200)
  point(randomy(q),randomy(w))
  strokeWeight((q+w)/2*val)
  }
              
}
function randomy(x){
  if(x>0.98){
     tot=random(width/8)
     return tot
    
     }else if(x>0.9){
     tot=random(width/8)+width/8
     return tot
       
      }else if(x>0.75){
      tot=random(width/8)+width/8+width/8
      return tot
        
       }else if(x>0.50){
       tot=random(width/8)+width/8+width/8+width/8
        return tot
         
        }else if(x>0.25){
        tot=random(width/8)+width/8+width/8+width/8+width/8
        return tot
          
         }else if(x>0.1){
         tot=random(width/8)+width/8+width/8+width/8+width/8+width/8
          return tot
           
          }else if(x>0.02){
          tot=random(width/8)+width/8+width/8+width/8+width/8+width/8+width/8
          return tot
            
           }else{
           tot=random(width/8)+width/8+width/8+width/8+width/8+width/8+width/8+width/8
           return tot
           }
}
function strok(x){
    if(x>0.98){
     tot=random(width/8)
     return tot
    
     }else if(x>0.9){
     tot=random(width/8)+width/8
     return tot
       
      }else if(x>0.75){
      tot=random(width/8)+width/8+width/8
      return tot
        
       }else if(x>0.50){
       tot=random(width/8)+width/8+width/8+width/8
        return tot
         
        }else if(x>0.25){
        tot=random(width/8)+width/8+width/8+width/8+width/8
        return tot
          
         }else if(x>0.1){
         tot=random(width/8)+width/8+width/8+width/8+width/8+width/8
          return tot
           
          }else if(x>0.02){
          tot=random(width/8)+width/8+width/8+width/8+width/8+width/8+width/8
          return tot
            
           }else{
           tot=random(width/8)+width/8+width/8+width/8+width/8+width/8+width/8+width/8
           return tot
           }
  
}