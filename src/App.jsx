// react needed
import { useEffect } from "react";
import grapesjs from 'grapesjs'
import '../styles/global.css'
// preset needed
import 'grapesjs/dist/css/grapes.min.css'
//  import {plugin as presetPlugin} from 'grapesjs-preset-webpage';
import customCodePlugin from 'grapesjs-custom-code';
import plugin from 'grapesjs-project-manager';
import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css';
import blocks from "../plugins/basic-blocks";
//custom plugins
import wrapperPlugin from '../plugins/wrapperPlugin'
import customVideoBlock from "../plugins/customVideoBlock";
import customVideoElement from "../plugins/customVideoElement";
import animationPluggin from "../plugins/animationPluggin";

function App() {
  
  useEffect(() => {
    window.editor = grapesjs.init({
      layerManager: {
        appendTo: '.layers-container'
    },    
      canvas: {
        // hls para streaming
        scripts: ['https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js','https://cdn.jsdelivr.net/npm/hls.js@1'],
        // animate css para animaciones
        styles: ['https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', 'https://unpkg.com/video.js/dist/video-js.css']
      },
      selectorManager: {
        // componentFirst: true,
      },
      container: '#gjs',
      height: '1080px',
      width: '100%',
      plugins: [plugin,blocks,customCodePlugin, wrapperPlugin, customVideoBlock, customVideoElement, animationPluggin ],
      storageManager: {
        id: 'gjs-',
        type: 'indexeddb',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      // storageManager:  {
      //   //type of save
      //   type: 'rest-api',
      //   autosave: true,
      //   stepsBeforeSave: 1,
      //   storeComponents: true,
      //   storeStyles: true,
      //   storeHtml: true,
      //   storeCss: true,
      //   // the URIs below can be the same depending on your API design 
      //   options: {
      //     remote: {
        // POST
      //       urlStore: 'https://localhost:3010/store/',
        // GET
      //       urlLoad: 'https://localhost:3010//load/',
        // DELETE
      //       urlDelete: 'https://localhost:3010/delete/',
      //       // ...
      //     }
      //   }
      // },
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
//opciones de pluggin
      },
      exportWrapper: true,
      // wrapperIsBody: true,
       dragMode: 'absolute',


      scripts: ['https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.14/hls.js']

      
    })

//Añadir dimensiones
    const styleManager = editor.StyleManager;
    styleManager.addSector('dimension')
// Botones para manejar el proyectos
const pn = editor.Panels;
pn.addButton('options', {
    id: 'open-templates',
    className: 'fa fa-folder-o',
    attributes: {
        title: 'Open projects and templates'
    },
    command: 'open-templates', //Open modal 
});
pn.addButton('views', {
    id: 'open-pages',
    className: 'fa fa-file-o',
    attributes: {
        title: 'Take Screenshot'
    },
    command: 'open-pages',
    togglable: false
});
//Se puede arrastrar en modo absoluto a todos los componentes
    editor.getModel().set('dmode','absolute')

//Botones de hacer y deshacer
    const um = editor.UndoManager;
    editor.Panels.addButton('options', {
      id: 'undo',
      className: 'fa fa-undo',
      command: editor => um.undo(),
    attributes: { title: 'Undo' }
    });
    editor.Panels.addButton('options', {
      id: 'redo',
      className: 'fa fa-repeat',
      command: editor => um.redo(),
      attributes: { title: 'Redo' }
    });

    
  //   editor.Panels.addPanel({ id: "options" }).get("buttons").add([
  //     { id: "block-editore", command: function(e) { 
  //       const exportData ={
  //         html: editor.getHtml(),
  //         css: editor.getCss(),
  //       };
  //       const projectData = editor.getProjectData();
  //       console.log(projectData);
  //       console.log(exportData);
  //     }
  //     , className: "fa fa-floppy-o" }
  // ]);
  }, [])

  return (
    <div className="editor-row">
  <div className="panel-left">
    <div className="layers-container"></div>
  </div>
  <div className="editor-canvas">
    <div id="gjs"></div>
  </div>
</div>
  );
}
export default App;