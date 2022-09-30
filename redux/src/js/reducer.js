
import { Adtask, Dltask,Edtask,DonTask } from "./Actiontype";




const initialeState ={
    listetasks:[
{id:Math.random(),text:"task1",isDone:false},
{id:Math.random(),text:"task2",isDone:false}

    ]
}
const Listereducer = (state=initialeState,{type,payload}) => {
    switch (type) {
        case Adtask :
            
           return{...state,listetasks:[...state.listetasks,payload] } 
    
        case Dltask:
            return{...state,listetasks:state.listetasks.filter(el=>el.id!==payload)}
           
            
        case DonTask:
            return {...state, listetasks : state.listetasks.map((el) =>(el.id === payload ? {...el, isDone:  !el.isDone} : el) )}    
        
        case Edtask :
            return {...state, listetasks: state.listetasks.map((el) => (el.id === payload.id ? {...el, text:payload.Newtask} : el))}
            default :
            return state ;     
       }

    }

export default Listereducer;





