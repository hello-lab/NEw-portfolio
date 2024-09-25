import Image from "next/image";

const Card=({img,deg,height,lang,kyss,title,shrtdes,des,tit})=> {
 if(des){
  console.log(des)
  des("hola")
  tit("good")}
  return(
    <div className="pcard" onClick={kyss} style={{transform:'rotate('+deg+')',bottom:height}}>
    <div className="dards"  >
    <a className="cards" >
    <Image
          className="language"
          src={lang}
          
          
          
        />

      <Image
          className="crdimg"
          src={img}
          alt="img"
          
          
        />
      <div className="tit">{title}</div>
      
      <div className="des">This is a very good table. Infact the best ,trust me this is the best table you will ever find.{"\n"}
      </div>
        
        <div className="des">Technologies: Wood,Nails{"\r"}
          Github:{"\r\n"}
        TRy it
        
         </div>

      </a></div></div>
      )
  }
  export default Card