import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
//custom plugins
import wrapperPlugin from '../plugins/wrapperPlugin'
import customVideoBlock from "../plugins/customVideoBlock";
import customVideoElement from "../plugins/customVideoElement";

function App() {
 useEffect(() => {
 const editor = grapesjs.init({
     container: '#gjs',
     height: '1080px',
     width: '100%',
     plugins: ['gjs-preset-webpage', wrapperPlugin, customVideoBlock, customVideoElement],
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
           height:''
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
     
     
      scripts: ['https://cdn.jsdelivr.net/npm/hls.js@1']
   })

  //  const stream = function(props) {
  //   const initLib = function() {
  //     const el = this;
  //     const myLibOpts = {
  //       prop1: props.myprop1,
  //       prop2: props.myprop2,
  //     };
  //     someExtLib(el, myLibOpts);
  //   };
  
  //   if (typeof someExtLib == 'undefined') {
  //     const stream = document.createElement('stream');
  //     stream.onload = initLib;
  //     stream.src = 'https://cdn.jsdelivr.net/npm/hls.js@1';
  //     document.body.appendChild(stream);
  //   } else {
  //     initLib();
  //   }
  // };

  const def = editor.Components.getType("default");

editor.Components.addType("default", {
   model:{
      defaults:{
         duration: 2,
         delay: 0,
         traits:[
            ...def.model.prototype.defaults.traits,
            ...[{
                   changeProp: 1,
                   type: "select",
                   label: "Animation",
                   name: "animation",
                   options:[
                     {value: 'bounce',name: 'Bounce'},
                     //Other animations...
                   ]
             }, {
                   changeProp: 1,
                   type: "number",
                   label: "Duration(s)",
                   name: "duration",
             }, {
                   changeProp: 1,
                   type: "number",
                   label: "Delay(s)",
                   name: "delay",
             }]
          ]
       },
       init() {
          this.on("change:animation", this.onAnimationChange);
          this.on("change:duration", this.onAnimationChange);
          this.on("change:delay", this.onAnimationChange);
       },
       onAnimationChange() {
          const animation = this.get("animation");
          const duration = this.get("duration");
          const delay = this.get("delay");
          this.addStyle({ "animation": `${animation} ${duration}s ${delay}s infinite` });
       }
    }
});


 },[])

 return (
   <div id="gjs"></div>
 );
}
export default App;