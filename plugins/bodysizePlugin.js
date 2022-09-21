import grapesjs from "grapesjs"

export default function bodysizePlugin(editor) {
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
                               type: "number",
                               label: "Alto(px)",
                               name: "Height",
                         }, {
                               changeProp: 1,
                               type: "number",
                               label: "Ancho(px)",
                               name: "Width",
                         },
                         ]
                      ]
                },
                init() {
                 this.on("change:Width", this.onSizeChange);
                 this.on("change:Height", this.onSizeChange);
              },
              onSizeChange() {
                 const Width = this.get("Width");
                 const Height = this.get("Height");
                 this.addStyle({ "Width": `${Width}px` });
                 this.addStyle({ "Height": `${Height}px` });
              }
            }),
            view: thisComp.view,
        });
    }
}

var editor = grapesjs.init({
    container: '#gjs',
    plugins: [bodysizePlugin]
})