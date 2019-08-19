var g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function() { return {}; });

// Here we"re setting nodeclass, which is used by our custom drawNodes function
// below.
g.setNode(0,  { label: "stack-shared",       class: "type-TOP" });
g.setNode(1,  { label: "client-shared-1",         class: "type-S" });
g.setNode(2,  { label: "client-shared-2",        class: "type-NP" });
g.setNode(3,  { label: "client-shared-3",        class: "type-DT" });
g.setNode(4,  { label: "use-case-a",      class: "type-TK" });
g.setNode(5,  { label: "use-case-b",        class: "type-VP" });
g.setNode(6,  { label: "use-case-c",       class: "type-VBZ" });
g.setNode(7,  { label: "use-case-d",        class: "type-TK" });

g.nodes().forEach(function(v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.rx = node.ry = 5;
});

// Set up edges, no special attributes.
g.setEdge(0, 1);
g.setEdge(0, 2);
g.setEdge(0, 3);
g.setEdge(1, 4);
g.setEdge(1, 5);
g.setEdge(2, 6);
g.setEdge(2, 7);

// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"),
    svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

// Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);
