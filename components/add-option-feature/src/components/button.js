(() => ({
    name: "Button",
    type: "CUSTOM",
    allowedTypes: [
        "CUSTOM"
    ],
    orientation: "HORIZONTAL",
    styles: () => () => ({}),
    jsx: [<button id='1'>Add field</button>, <button id='2'>Remove field</button>]


}))();