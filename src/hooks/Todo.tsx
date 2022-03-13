import { useState,useReducer } from "react"
export default () =>
{
    const initialState:any = []
    const reducer = (state:any, action:any) =>
    {
        switch (action.type) {
            case "ADD":
               return [...state,action.item]                
                break;
            case "REMOVE":
                console.log("remove");
                
                return state.filter((item:any)=> 
                {
                    return item.id !== action.id
                } )                
                break;
            case "CHECK":
                return state.map((item:any)=> 
                {
                    console.log("check");
                    
                    if(item.id==action.id)
                    {
                        return {...item, checked:!item.checked}
                    }
                    return item
                } )           
                break;        
            default:
                return state                
                break;
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)

    const add = (item:any) =>{ dispatch({type:"ADD",item:item})}
    const remove = (id:any) =>{dispatch({type:"REMOVE",id:id})}
    const check = (id:any) =>{dispatch({type:"CHECK",id:id})}

    return [state,add,remove,check]

}