//define the trait

defaults: {
    traits: [{type: 'select',
     options: [{
                { value: 'myCustomClass', name: 'Option A' },
             }],
     label: 'traitLabel',
     name: 'traitName',
     changeProp: 1
     }]
},


//adding/replacing a class.

handleChange(props) {
	var classes = this.getAttributes().class,
		newClass = props.changed.traitName,
		arClasses = classes.split(" ");
	var filter = arClasses.filter(function (el) {
		if (['myGivenClass'].includes(el))
			return el;
	});
	if (filter.length != 0) {
		this.removeClass(filter);
		classes = this.getAttributes().class
	}
	this.setClass(classes + " " + newClass)
},