
import style from "../../styles/popup_style.module.css"
import { useRef,useState,useEffect,useCallback,useContext } from "react"
import UserAuth from '../../helpers/user/usercontext'


export const PopupMain = ({message,mode})=>{

    const context = useContext(UserAuth)
    const containerRef = useRef()

    //* a state to trigger the exit animation for popup 
    const [unmount,setUnmount] = useState(false)
  
   
    const cb = useCallback(()=>{
        
        setTimeout(() => {
            setUnmount(true)

        }, 3500)

        if(unmount){
            const className = containerRef.current?.classList[0];
            const cont = document.querySelector(`.${className}`)
            cont.classList.add(`${style["container-exit"]}`)
           
            setTimeout(() => {
                
                //* No popup active currently
                context.popupHandler(false)
                // containerRef.current.remove()
            },2000);
        }
    
    },[unmount])

    useEffect(()=>{
        cb()
        

    },[cb])

    return <>
       
            <div className={style["container"]} ref={containerRef}>
                <div className={style["text-container"]} style={{color:(mode== "accept")?"green":"red"}}>
                    {(mode == "accept")?<ion-icon name="checkmark-circle-outline" ></ion-icon> :<ion-icon name="alert-circle-outline" ></ion-icon>}
                    <h4>{message}</h4>
                </div>
                <div className={style["loading-bar"]}></div>
            </div>

       


        
    </>
}