const head=React.createElement("h1",{id:"ncwuf",abc:"xyz"},"Hello From React");

const root=ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement("div",{id:"parent"},[
    
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"Iam Child"),
 React.createElement('h3',{},"iam H3 tag")
])
,

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Iam Child"),
 React.createElement('h3',{},"iam H3 tag")
]
)
]);

console.log(parent);
root.render(parent);