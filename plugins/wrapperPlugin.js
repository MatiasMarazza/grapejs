import grapesjs from "grapesjs"

export default function wrapperPlugin(editor){
    // wrapper element
   editor.Components.addType('wrapper', {
    model: {
      defaults: {
        tagName: 'section'
      },
    
    }})
}
var editor = grapesjs.init({
    container:'#gjs',
    plugins:[wrapperPlugin]
})