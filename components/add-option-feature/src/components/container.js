(() => ({
    name: 'Container',
    type: "CONTAINER",
    allowedTypes: [
      "INPUT",
    ],
    orientation: "HORIZONTAL",
    styles: () => () => ({}),
    jsx: <div className="container"></div>
}))();