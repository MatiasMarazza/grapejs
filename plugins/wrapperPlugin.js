import grapesjs from "grapesjs"

export default function wrapperPlugin(editor){
    // wrapper element
   editor.Components.addType('wrapper', {
    model: {
      defaults: {
        tagName: 'section',
        stylable: [
          // Default attributes
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-attachment',
          'background-position',
          'background-size',

          // Add the "Dimension" sector attributes
          'width',
          'height', 

      ]
      },
    
    }})
}
var editor = grapesjs.init({
    container:'#gjs',
    plugins:[wrapperPlugin],
    
})