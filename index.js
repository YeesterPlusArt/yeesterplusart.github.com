import st from "./lib/st"
st(window)
class MenuList extends HTMLElement {
    constructor() {
      super();
    }
    get enabled(){
        return !!this.attributes.getNamedItem("enabled")
    }
    set enabled(val){
        if(val == this.enabled)return;
        if (val){
            var att=new Attr();
            att.name="enabled"
            this.attributes.setNamedItem(att);
        }else{
            this.attributes.removeNamedItem("enabled")
        }
        var ce = new CustomEvent("enabledChanged",{bubbles:true});
        ce.elm=this;
        ce.enabled=val;
        this.dispatchEvent(ce);
    }
    connectedCallback(){

    }
    // Element functionality written in here
}
customElements.define("menulist",MenuList)
class MenuItem extends HTMLElement {
    isButton=false;
    constructor() {
      super();
    }
    connectedCallback(){

    }
}
customElements.define("menuitem",MenuItem)
window.onload=()=>{
    var menu = document.getElementById("mainMenu");
    document.getElementById("menu").onclick=()=>{
        menu.enabled=true;
    }
    menu.children.item(0).onclick=()=>{
        menu.enabled=false;
    }
}