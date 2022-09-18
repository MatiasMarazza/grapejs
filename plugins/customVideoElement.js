import grapesjs from "grapesjs"

export default function customVideoElement(editor){
    const { DomComponents, Blocks } = editor;
    DomComponents.addType("custom-video", {
        extend: "video",
        extendFn: ['init'],
        view: {
          events: {
            dblclick: "handleDblClick"
          },
          handleDblClick() {
            alert("Hola mundo!!");
          }
        },
        model: {
          init() {
            this.addMutedTrait();
          },
      
          // updateTraits() {
          //   this.addMutedTrait();
          // },
      
          addMutedTrait() {
            if (!this.getTrait('muted')) {
              this.addTrait({
                type: 'checkbox',
                name: 'muted',
              })
            }
          },
          defaults: {
            attributes: { class: 'streaming' },
          }
        },
      });
    
}

var editor = grapesjs.init({
    container:'#gjs',
    plugins:[customVideoElement]
})