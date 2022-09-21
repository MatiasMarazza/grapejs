// Update all component model default properties
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
            }
        }),
        view: thisComp.view,
    });
}