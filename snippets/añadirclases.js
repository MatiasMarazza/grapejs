const editor = grapesjs.init({
    height: "100%",
    container: "#gjs",
    showOffsets: true,
    fromElement: true,
    noticeOnUnload: false,
    storageManager: false,
    plugins: ["grapesjs-preset-webpage"]
  });
  editor.DomComponents.addType("myComponent", {
    model: {
      init() {
        this.on("change:attributes", this.handleChange);
      },
      handleChange() {
        console.log("value ", this.getAttributes()); 
        this.addClass("active");
      }
    }
  });
  const blockManager = editor.BlockManager;
  blockManager.add("my-component", {
    label: "myComponent",
    content: {
      type: "myComponent",
      tagName: "div",
      classes: ["test"],
      style: {
        width: "100px",
        height: "100px"
      }
    },
    category: "Basic",
    attributes: {
      title: "Component"
    }
  });
  