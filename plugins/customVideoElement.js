import grapesjs from "grapesjs"

const script = function(){
  let elements = document.getElementsByClassName('streaming');
  let video = elements[0];
  let videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }

  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
}
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
            alert("Hola mundo");
          },
        },
        model: {
          defaults: {
            tagName: 'video-js',
            script,
            attributes: { class: 'streaming'},
          },
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

          
        },
      });
    
}

var editor = grapesjs.init({
    container:'#gjs',
    plugins:[customVideoElement]
})