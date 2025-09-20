//   <div id="parent">
//     <div id="child1">
//         <h1>Hello I'm H1 From Nested Div</h1>
 //         <h2>Hello I'm H2 From Nested Div</h2>
//     </div>
 // <div id="child2">
//         <h1>Hello I'm H1 From Nested Div</h1>
 //         <h2>Hello I'm H2 From Nested Div</h2>
//     </div>
//   </div>
 // ReactElement(Object)=html{Becom html that browser understand}
 
 const parent = React.createElement(
    'div',
    {id:"parent"},
    [React.createElement(
        'div',
        {id:"child1"},
       [ React.createElement(
            'H1',
            {},
            "Hello I'm H1 From Nested Div"
        ),
         React.createElement(
            'H2',
            {},
            "Hello I'm H2 From Nested Div"
        ) ]
    ),
    React.createElement(
        'div',
        {id:"child2"},
       [ React.createElement(
            'H1',
            {},
            "Hello I'm H1 From Nested Div"
        ),
         React.createElement(
            'H2',
            {},
            "Hello I'm H2 From Nested Div"
        ) ]
    )
]
  )
  
  // jsx
  
  const heading= React.createElement("h1", {id:"heading"}, "Hello World From React!")
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    root.render(parent);