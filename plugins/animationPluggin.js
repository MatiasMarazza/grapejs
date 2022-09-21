import grapesjs from "grapesjs"

export default function animationPluggin(editor) {
    const def = editor.Components.getType("default");

    const allComps = editor.DomComponents.componentTypes.slice();
    for (let i = 0; i < allComps.length; i++) {
        const thisComp = editor.DomComponents.getType(allComps[i].id);
        editor.DomComponents.addType(allComps[i].id, {
            model: thisComp.model.extend({
                defaults: {
                    ...thisComp.model.prototype.defaults,
                    copyable: false,
                    traits:[
                        ...def.model.prototype.defaults.traits,
                        ...[{
                               changeProp: 1,
                               type: "select",
                               label: "Animation",
                               name: "animation",
                               options:[
                                 {value: 'bounce',name: 'Bounce'},
                                 //expandir con más animaciones 
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
            }),
            view: thisComp.view,
        });
    }
}

var editor = grapesjs.init({
    container: '#gjs',
    plugins: [animationPluggin]
})