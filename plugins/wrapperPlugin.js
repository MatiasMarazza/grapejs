import grapesjs from "grapesjs"

export default function wrapperPlugin(editor){
    // wrapper element
   editor.Components.addType('wrapper', {
    model: {
      styleManager:{
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      },
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
                'max-width',
                'min-height', 
                'margin', 
                'margin-top', 
                'margin-right', 
                'margin-bottom', 
                'margin-left', 
                'padding', 
                'padding-top', 
                'padding-right', 
                'padding-bottom', 
                'padding-left'
            ]
      },
    
    }})
}
var editor = grapesjs.init({
    container:'#gjs',
    plugins:[wrapperPlugin],
    
})