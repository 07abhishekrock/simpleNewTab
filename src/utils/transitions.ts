import {elasticOut} from 'svelte/easing';


export const fadeIn = (node : Element , {
     duration = 2000,
     delay = 0,
     translateString = (t : number)=>`translateY(calc(100px * ${1 - t}))`
})=>{


     return {
          duration,
          delay,
          css : (t : number)=>{
               t = elasticOut(t);
               return `opacity:${t};transform:${translateString(t)}`;
          }
     }
}