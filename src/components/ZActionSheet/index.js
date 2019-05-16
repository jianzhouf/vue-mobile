import ZActionSheet from "./ZActionSheet.vue";
import Vue from "vue";
const ZAS = Vue.extend(ZActionSheet)

let instance 
const initInstance = ()=>{
    if(!instance){
        instance = new ZAS({
            el: document.createElement("div")
        })
        document.body.appendChild(instance.$el);
    }
}




function show(options){
    initInstance();
    for(let key in options){
        if(options.hasOwnProperty(key)){
            instance[key]= options[key]
        }
    }
    instance.visible = true
}

export default {
    show
}