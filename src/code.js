export const compiledGame = `
'use strict';

var Three = require("./three");
var Three$1 = require("three");
var CrateGif = require("./textures/crate.gif");

function init(element) {
  var rect = element.getBoundingClientRect();
  var scene = new Three$1.Scene();
  var renderer = new Three$1.WebGLRenderer();
  var camera = new Three$1.PerspectiveCamera(70.0, rect.width / rect.height, 1.0, 1000.0);
  camera.position.set(0, 150, 400);
  var texture = new Three$1.TextureLoader().load(CrateGif);
  var material = new Three$1.MeshBasicMaterial({
        map: texture
      });
  var geo = new Three$1.BoxGeometry(125, 125, 125);
  var cube = new Three$1.Mesh(geo, material);
  scene.add(cube);
  renderer.setSize(rect.width, rect.height);
  element.appendChild(renderer.domElement);
  var playing = [/* true */1];
  var loop = function () {
    if (playing[0]) {
      var partial_arg = cube.rotation;
      ((function (param) {
              return Three.rotateX(partial_arg, param);
            })(0.005));
      var partial_arg$1 = cube.rotation;
      ((function (param) {
              return Three.rotateY(partial_arg$1, param);
            })(0.01));
      renderer.render(scene, camera);
    }
    requestAnimationFrame(loop);
    return /* () */0;
  };
  loop(/* () */0);
  return /* record */[/* playPause */(function () {
              playing[0] = 1 - playing[0];
              return /* () */0;
            })];
}

exports.init = init;
/* three Not a pure module */



//////////////////
// WEBPACK FOOTER
// ./src/game.re
// module id = ./src/game.re
// module chunks = 0
`;

export const types = `
type scene;
type renderer;
type domElement;
type childObject;
type camera = childObject;
type geometry;
type material;
type mesh;
type vector;
type loader;
type texture;
type materialSpec = {. "map": texture };
`;

export const interop = `
/* Our types! */
type scene;
type renderer;
type domElement;
type childObject;
type camera = childObject;
type geometry;
type material;
type mesh;
type vector;
type loader;
type texture;
type materialSpec = {. "map": texture };

/* Constructurs */
[@bs.new] [@bs.module "three"] external newScene: unit => scene = "Scene";
[@bs.new] [@bs.module "three"] external newRenderer: unit => renderer = "WebGLRenderer";
[@bs.new] [@bs.module "three"] external newCamera: (float, float, float, float) => camera = "PerspectiveCamera";
[@bs.new] [@bs.module "three"] external boxGeo: (int, int, int) => geometry = "BoxGeometry";
[@bs.new] [@bs.module "three"] external basicMeshMaterial: materialSpec => material = "MeshBasicMaterial";
[@bs.new] [@bs.module "three"] external newMesh: (geometry, material) => childObject = "Mesh";
[@bs.new] [@bs.module "three"] external textureLoader: unit => loader = "TextureLoader";

/* Fluent API functions */
[@bs.send.pipe : loader] external load : string => texture = "load";
[@bs.send.pipe : renderer] external render : (scene, camera) => unit = "render";
[@bs.send.pipe : renderer] external setSize : (float, float) => unit = "setSize";
[@bs.send.pipe : scene] external add : childObject => unit = "add";
[@bs.send.pipe : childObject][@bs.scope "position"] external setPosition : (int, int, int) => unit = "set";

/* Getters & setters */
[@bs.get] external getDomElement : renderer => domElement = "domElement";
[@bs.get] external rotation : childObject => vector = "rotation";
[@bs.set] external setX : (vector, float) => unit = "x";
[@bs.get] external getX : (vector) => float = "x";
[@bs.set] external setY : (vector, float) => unit = "y";
[@bs.get] external getY : (vector) => float = "y";

[@bs.val] external animate : (unit => unit) => unit = "requestAnimationFrame";

let rotateX = (vector, change) => setX(vector, getX(vector) +. change);
let rotateY = (vector, change) => setY(vector, getY(vector) +. change);
`;

export const gameLogic = `
open Three;

[@bs.module] external crate : string = "./textures/crate.gif";

type controller = {
  playPause: unit => unit
};

let init = element => {
  let unwrapped = ReactDOMRe.domElementToObj(element);
  let rect = unwrapped##getBoundingClientRect();

  let scene = newScene();
  let renderer = newRenderer();
  let camera = newCamera(70.0, rect##width /. rect##height, 1.0, 1000.0);
  camera |> setPosition(0, 150, 400);

  let texture = textureLoader() |> load(crate);
  let material = basicMeshMaterial({ "map": texture });
  let geo = boxGeo(125, 125, 125);
  let cube = newMesh(geo, material);

  scene |> add(cube);

  renderer |> setSize(rect##width, rect##height);

  unwrapped##appendChild(renderer |> getDomElement) |> ignore;

  let playing = ref(true);

  let rec loop = () => {
    if (playing^) {
      (cube |> rotation |> rotateX)(0.005);
      (cube |> rotation |> rotateY)(0.01);
      renderer |> render(scene, camera);
    };

    animate(loop);
  };

  loop();

  {
    playPause: () => {
      playing := !(playing^);
    }
  };
};
`;

export const magicBox = {
  interop: `
[@bs.new] [@bs.module "three"] external boxGeo: (int, int, int) => geometry = "BoxGeometry";
  `,
  usage: `
let geo = boxGeo(125, 125, 125);
  `,
  compilesTo: `
var geo = new Three$1.BoxGeometry(125, 125, 125);
  `
};

export const magicPipe = {
  interop: `
[@bs.new] [@bs.module "three"] external textureLoader: unit => loader = "TextureLoader";
[@bs.send.pipe : loader] external load : string => texture = "load";
  `,
  usage: `
let texture = textureLoader() |> load("path/to/texture.gif");
  `,
  compilesTo: `
var texture = new Three$1.TextureLoader().load("path/to/texture.gif");
  `
};

export const magicProp = {
  interop: `
[@bs.get] external getDomElement : renderer => domElement = "domElement";
  `,
  usage: `
let gameCanvas = renderer |> getDomElement;
  `,
  altUsage: `
let gameCanvas = getDomElement(renderer);
  `,
  compilesTo: `
var gameCanvas = renderer.domElement;
  `
};

export const reducerComponent = `
type state = {
  initialized: bool,
  playing: bool
};

type action =
  | Toggle;

let component = ReasonReact.reducerComponent("App");

let make = (_children) => {
  ...component,
  initialState: () => { initialized: false, playing: false },
  reducer: (action, state) =>
    switch action {
      | Toggle => ReasonReact.Update({ ...state, playing: !state.playing })
    },
  render: (self) => {
    let buttonText = self.state.playing ? "Pause" : "Play";

    <div className="App">
      <button onClick={_ => self.send(Toggle)}> (ReasonReact.stringToElement(buttonText)) </button>
    </div>;
  }
};
`;

export const refs = {
  actions: {
    before: `
type action =
  | Toggle;
    `,
    after: `
type action =
  | Ready(option(Dom.element))
  | Toggle;
    `
  },
  reducer: {
    before: `
  reducer: (action, state) =>
    switch action {
      | Toggle => ReasonReact.Update({ ...state, playing: !state.playing })
    },
    `,
    after: `
  reducer: (action, state) =>
    switch action {
      | Toggle => ReasonReact.Update({ ...state, playing: !state.playing })
      | Ready(canvas) => ReasonReact.SideEffects(_ => {
        switch (canvas) {
          | (Some(c)) => Js.log(c)
          | _ => ()
        }
      })
    },
    `
  },
  render: {
    before: `
  render: (self) => {
    let buttonText = self.state.playing ? "Pause" : "Play";

    <div className="App">
      <button onClick={_ => self.send(Toggle)}> (ReasonReact.stringToElement(buttonText)) </button>
    </div>;
  }
    `,
    after: `
  render: (self) => {
    let buttonText = self.state.playing ? "Pause" : "Play";

    <div className="App">
      <button onClick={_ => self.send(Toggle)}> (ReasonReact.stringToElement(buttonText)) </button>
      <div ref={c => self.send(Ready(Js.Nullable.toOption(c)))} />
    </div>;
  }
    `
  },
  final: `
type state = {
  initialized: bool,
  playing: bool
};

type action =
  | Ready(option(Dom.element))
  | Toggle;

let component = ReasonReact.reducerComponent("App");

let make = (_children) => {
  ...component,
  initialState: () => { initialized: false, playing: false },
  reducer: (action, state) =>
    switch action {
      | Toggle => ReasonReact.Update({ ...state, playing: !state.playing })
      | Ready(canvas) => ReasonReact.SideEffects(_ => {
        switch (canvas) {
          | (Some(c)) => Js.log(c)
          | _ => ()
        }
      })
    },
  render: (self) => {
    let buttonText = self.state.playing ? "Pause" : "Play";

    <div className="App">
      <button onClick={_ => self.send(Toggle)}> (ReasonReact.stringToElement(buttonText)) </button>
      <div ref={c => self.send(Ready(Js.Nullable.toOption(c)))} />
    </div>;
  }
};
  `,
  inlineStyle: `
let canvasStyle = ReactDOMRe.Style.make(~height="100vh", ());
  `
};

export const integration = {
  gameCode: `
type controller = { playPause: unit => unit };

let init = _ => {
  let playing = ref(true);

  {
    playPause: () => {
      let nextState = !(playing^);
      Js.log(nextState ? "Playing" : "Paused");
      playing := nextState;
    }
  }
};
  `,
  state: {
    before: `
type state = {
  initialized: bool,
  playing: bool
};
    `,
    after: `
open Game;

type state = {
  initialized: bool,
  playing: bool,
  controller: option(controller)
};
    `
  },
  actions: {
    before: `
type action =
  | Ready(option(Dom.element))
  | Toggle;
    `,
    after: `
type action =
  | Start(controller)
  | Ready(option(Dom.element))
  | Toggle;
    `
  },
  reducer: {
    before: `
  reducer: (action, state) =>
    switch action {
      | Toggle => ReasonReact.Update({ ...state, playing: !state.playing })
      | Ready(canvas) => ReasonReact.SideEffects(_ => {
        switch (canvas) {
          | (Some(c)) => Js.log(c)
          | _ => ()
        }
      })
    },
    `
  },
  finished: `
open Game;

type state = {
  initialized: bool,
  playing: bool,
  controller: option(controller)
};

type action =
  | Start(controller)
  | Ready(option(Dom.element))
  | Toggle;

let component = ReasonReact.reducerComponent("App");

let canvasStyle = ReactDOMRe.Style.make(~height="100vh", ());

let make = (_children) => {
  ...component,
  initialState: () => { initialized: false, playing: false, controller: None },
  reducer: (action, state) =>
    switch action {
      | Start(c) => ReasonReact.Update({ initialized: true, playing: true, controller: Some(c) })
      | Toggle => ReasonReact.UpdateWithSideEffects({ ...state, playing: !state.playing }, self => {
        switch (self.state.controller) {
          | Some(c) => c.playPause()
          | _ => ()
        }
      })
      | Ready(canvas) => ReasonReact.SideEffects(self => {
        switch (canvas, self.state.initialized) {
          | (Some(c), false) => Start(init(c)) |> self.send
          | _ => ()
        }
      })
    },
  render: (self) => {
    let buttonText = self.state.playing ? "Pause" : "Play";
    <div className="App">
      <button onClick={_ => self.send(Toggle)}> (ReasonReact.stringToElement(buttonText)) </button>
      <div style=(canvasStyle) ref={c => self.send(Ready(Js.Nullable.toOption(c)))} />
    </div>;
  }
};
  `
};
