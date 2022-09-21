import grapesjs from "grapesjs"

export default function animationPluggin(editor) {
    // now - traits that should be on every component - base characteristics that we want to apply
    domComponents.getTypes().map(type => {

        domComponents.addType(type.id, {

            model: {
                defaults: {

                    traits: [
                        ...domComponents.getType(type.id).model.prototype.defaults.traits,
                        {
                            label: 'Allow editing in pages',
                            name: 'allow_editing_in_pages',
                            type: 'checkbox'
                        }
                    ]

                }
            }

        })
    });

}

var editor = grapesjs.init({
    container: '#gjs',
    plugins: [animationPluggin]
})