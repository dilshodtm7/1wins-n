import React, { useState } from "react";
import "./index.css";

const indexactive = () => {
 
      setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 3.02 ;  
      }
    } , 1000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.02;  
        }
      } ,20000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.81;  
          }
        } , 32000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 16.85;  
            }
          } , 49000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 3.07;  
             }
            } , 93000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent =3.72 ;  
              }
            } , 118000)
            
            
  setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 3.57;  
              }
            } , 143000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1.20;  
      }
    } , 169000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.70;  
        }
      } ,182000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.80;  
          }
        } , 199000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 5.19;  
            }
          } , 217000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.03;  
              }
            } , 247000)




 setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent =1;  
      }
    } , 258000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 4.25;  
        }
      } ,380000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 2.04;  
          }
        } , 408000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 2.25;  
            }
          } , 427000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 11.38;  
              }
            } , 448000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 7.48 ;  
              }
            } , 3600000)
            
            
  setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.68;  
              }
            } , 3940000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 2.61;  
      }
    } , 4110000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.34;  
        }
      } ,4330000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 2.97;  
          }
        } , 4480000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 1.08;  
            }
          } , 4710000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.27;  
              }
            } , 4830000)
            
            
            
            setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1.85;  
              }
            } , 4970000)
            
            setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1;  
      }
    } , 5150000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.53;  
        }
      } ,5260000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 3.90;  
          }
        } , 5420000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 1.15;  
            }
          } , 5720000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 4.66;  
              }
            } , 5820000)




 setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 1.66 ;  
      }
    } , 6160000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.03;  
        }
      } ,6360000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.04;  
          }
        } , 6430000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 5.47;  
            }
          } , 6610000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 1;  
              }
            } , 3490000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 7.48 ;  
              }
            } , 3600000)
            

    return (
      <>
  
        
        <div className="container-avia">
          <h3 className="for-h">Lucky Jet</h3>
        <div className="loader">
  
        <div className="plane">
          <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img"/>
        </div>
        <div className="earth-wrapper">
          <h3 className="lucky-text" id="lucky">
            Wait
          </h3>
        </div>  
      </div>  
        
      </div>
      </>
    );
  };
  
  export default indexactive;
