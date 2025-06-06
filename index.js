
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
            var att=document.createAttribute("enabled");
            att.value="true"
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
customElements.define("menulist-",MenuList)
class MenuItem extends HTMLElement {
    isButton=false;
    constructor() {
      super();
    }
    connectedCallback(){

    }
}
customElements.define("menuitem-",MenuItem)
window.onload=()=>{
    var menu = document.getElementById("mainMenu");
    document.getElementById("menu").onmouseup=()=>{
        menu.enabled=true;
    }
    menu.children.item(0).onmouseup=()=>{
        menu.enabled=false;
    }
}