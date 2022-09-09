import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'

function App() {
 useEffect(() => {
 const editor = grapesjs.init({
     container: '#gjs',
     height: '1080px',
     width: '100%',
     plugins: ['gjs-preset-webpage'],
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
           height:'1080px'
         },
         {
           id: 'tablet',
           name: 'Tablet',
           width: '768px',
           widthMedia: '992px',
         },
         {
           id: 'mobilePortrait',
           name: 'Mobile portrait',
           width: '320px',
           widthMedia: '575px',
         },
       ]
     },
     pluginsOpts: {
       'grapesjs-preset-webpage': {
         blocksBasicOpts: {
           blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
           flexGrid: 1,
         },
         blocks: ['link-block', 'quote', 'text-basic'],
       },
     },
     	exportWrapper: false,
       wrapperIsBody: false,
       dragMode: 'absolute',
     
     
    //  scripts: ['https://.../somelib.min.js'], acá hay que agregar el script del streaming
   })
  //  editor.DomComponents.addType('video-hls', {
  //   // Make the editor understand when to bind `my-input-type`
  //   isComponent: el => el.tagName === 'INPUT',
  
  //   // Model definition
  //   model: {
  //     // Default properties
  //     defaults: {
  //       tagName: 'video',
  //       draggable: true, 
  //       droppable: true, // Can drop other elements inside
  //       attributes: { // Default attributes
  //         type: 'video',
  //         name: 'video-hls',
  //         placeholder: 'm3u8',
  //         allowfullscreen: 'allowfullscreen'
  //       },
  //       traits: [
  //         'name',
  //         'placeholder',
  //         { type: 'checkbox', name: 'required' },
  //       ],
  //     }
  //   }
  // });

  // comps.addType('video-hls', {
  //   isComponent: el => {el.tagName == 'video'},
  //   extend: 'other-defined-component',
  //   model: { 
  //     defaults:{

  //     }
  //    }, // Will extend the model from 'other-defined-component'
  //   view: { ... }, // Will extend the view from 'other-defined-component'
  // });

  const { DomComponents, Blocks } = editor;

  DomComponents.addType("custom-video", {
    extend: "video",
    view: {
      events: {
        dblclick: "handleDblClick"
      },
      handleDblClick() {
        alert("HOla mundo!");
      }
    }
  });
  
  
  // Add a block
  Blocks.add("Video", {
    label: "Video HLS",
    attributes: { class: "fa fa-youtube-play HLS" },
    content: {
      type: "custom-video"
    }
  });
  

   editor.Components.addType('wrapper', {
    model: {
      defaults: {
        tagName: 'span'
      },
      toHTML: function(opts) {
        return this.getInnerHTML(opts);
       }
    }})
 },[])

 return (
   <div id="gjs"></div>
 );
}
export default App;