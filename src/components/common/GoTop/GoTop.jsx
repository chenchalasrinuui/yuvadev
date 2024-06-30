import React    from "react";
import template from "./GoTop.jsx";

class GoTop extends React.Component {
  constructor(){
    super();
    this.state={
      isShow:false
    }
  }
  render() {
    return template.call(this);
  }
  componentDidMount(){
    let _timer;
    let _bool=true;
    window.addEventListener('scroll',()=>{
        if(_bool){
          this.fnShowGoTop();
          _bool=false;
        }
        clearTimeout(_timer);
        _timer=setTimeout(() => {
          this.fnShowGoTop();
        }, 50);
    })
  }
  fnShowGoTop(){
     let _top=Math.floor(window.scrollY);
     let _isShow=false;
     if(_top > 400){
        _isShow=true;
     }
     this.setState({
       isShow:_isShow
     })
  }
  fnGoTop(){
    let _top=Math.floor(window.scrollY);
    let _interval=setInterval(() => {
          _top=_top-5;
          window.scrollTo(0,_top);
          if(_top <= 0){
            clearInterval(_interval);
          }
    },0);
   
  }
}

export default GoTop;
