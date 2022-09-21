// react needed
import { useEffect } from "react";
import grapesjs from 'grapesjs'
// preset needed
import 'grapesjs/dist/css/grapes.min.css'
import plugin from 'grapesjs-preset-webpage';
import customCodePlugin from 'grapesjs-custom-code';
//custom plugins
import wrapperPlugin from '../plugins/wrapperPlugin'
import customVideoBlock from "../plugins/customVideoBlock";
import customVideoElement from "../plugins/customVideoElement";
import animationPluggin from "../plugins/animationPluggin";
import bodysizePlugin from "../plugins/bodysizePlugin";

function App() {
  useEffect(() => {
    const editor = grapesjs.init({
      canvas: {
        // hls para streaming
        scripts: ['https://cdn.jsdelivr.net/npm/hls.js@1'],
        // animate css para animaciones
        styles: ['https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css']
      },
      selectorManager: {
        // componentFirst: true,
      },
      container: '#gjs',
      height: '1080px',
      width: '100%',
      plugins: [plugin,customCodePlugin, wrapperPlugin, customVideoBlock, customVideoElement, bodysizePlugin, animationPluggin ],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices:
          [
            {
              id: 'desktop',
              name: 'Desktop',
              width: '',
              height: ''
            },
          ]
      },
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          blocksBasicOpts: {
            blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
            flexGrid: 1,
          },
          blocks: ['link-block', 'quote', 'text-basic'],
        },
      },
      exportWrapper: true,
      wrapperIsBody: true,
      dragMode: 'absolute',


      scripts: ['https://cdn.jsdelivr.net/npm/hls.js@1']

      
    })

    
    editor.Panels.addPanel({ id: "devices-c" }).get("buttons").add([
      { id: "block-editor", command: function(e) { 
        const exportData ={
          html: editor.getHtml(),
          css: editor.getCss(),
        };
        const projectData = editor.getProjectData();
        console.log(projectData);
        console.log(exportData);
      }
      , className: "fa fa-floppy-o" }
  ]);
  }, [])

  return (
    <div id="gjs"></div>
  );
}
export default App;