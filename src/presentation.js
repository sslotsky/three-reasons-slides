// Import React
import React from "react";

import preloader from "spectacle/lib/utils/preloader";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text,
  CodePane,
  Magic,
  Appear,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from "spectacle-code-slide";

import {
  interop,
  gameLogic,
  magicBox,
  magicPipe,
  magicProp,
  reducerComponent,
  refs,
  integration,
  compiledGame,
  types
} from "./code";

import Audio from "./audio";
import magic from "./magic-number.mp3";
import magical from "./magical.mp3";

import threeLogo from "./three.jpeg";
import reactLogo from "./react.svg";
import reasonLogo from "./reason.svg";

import bear from "./bear.jpg";

// Require CSS
require("normalize.css");
require("prismjs/themes/prism.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "orange"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

preloader({
  reactLogo,
  threeLogo,
  reasonLogo
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Three Reasons
          </Heading>
        </Slide>
        <Slide>
          <Appear>
            <Image src={threeLogo} />
          </Appear>
          <Appear>
            <Image src={reasonLogo} width="40%" />
          </Appear>
          <Appear>
            <Image src={reactLogo} width="40%" />
          </Appear>
          <Audio file={magic} />
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Our Mission
          </Heading>
          <List>
            <Appear>
              <ListItem>Learn some ReasonML</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  href="https://threejs.org/examples/#webgl_geometry_cube"
                  target="_blank"
                >
                  Build a cool 3D thingy
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Decide if it's Un-ReasonML?</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          textSize={12}
          code={compiledGame}
          ranges={[
            { loc: [0, 46] }
          ]}
        />
        <Slide>
          <Heading textColor="secondary" size={2}>
            OCaml My Caml
          </Heading>
          <List>
            <Appear>
              <ListItem>Rich type system</ListItem>
            </Appear>
            <Appear>
              <ListItem>FP + OOP</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cross platform compilation</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="secondary" size={2}>
            Bucklescript & ReasonML
          </Heading>
          <List>
            <Appear>
              <ListItem>Compiles to JS</ListItem>
            </Appear>
            <Appear>
              <ListItem>JS-like syntax</ListItem>
            </Appear>
            <Appear>
              <ListItem>NPM workflow</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="secondary" size={2}>
            Why should I care?
          </Heading>
          <List>
            <Appear>
              <ListItem>Real type safety for your JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Excellent foreign function interface</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  href="https://reasonml.github.io/reason-react/"
                  target="_blank"
                >
                  React ready
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Audio file={magic} startAt={145} fadeIn />
          <Heading textColor="secondary" size={2}>
            Please Bear With Us...
          </Heading>
          <Image src={bear} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="reason"
          textSize={12}
          code={reducerComponent}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 27] }
          ]}
        />
        <Slide>
          <Heading textColor="secondary" size={2}>
            Working with the DOM
          </Heading>
          <List>
            <ListItem>Using React refs</ListItem>
            <ListItem>Handling nullable data</ListItem>
            <ListItem>Styling in reason-react</ListItem>
          </List>
        </Slide>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Actions: before
            </Heading>
            <CodePane
              lang="reason"
              source={refs.actions.before}
              theme="external"
            />
          </Slide>
          <Slide>
            <Audio file={magical} />
            <Heading size={6} textColor="secondary">
              Actions: after
            </Heading>
            <CodePane
              lang="reason"
              source={refs.actions.after}
              theme="external"
            />
          </Slide>
        </Magic>
        <Slide>
          <Heading textColor="secondary">No Null References!</Heading>
        </Slide>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Reducer: before
            </Heading>
            <CodePane
              lang="reason"
              source={refs.reducer.before}
              theme="external"
            />
          </Slide>
          <Slide>
            <Audio file={magical} />
            <Heading size={6} textColor="secondary">
              Reducer: after
            </Heading>
            <CodePane
              lang="reason"
              source={refs.reducer.after}
              theme="external"
            />
          </Slide>
        </Magic>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Render: before
            </Heading>
            <CodePane
              lang="reason"
              source={refs.render.before}
              theme="external"
            />
          </Slide>
          <Slide>
            <Audio file={magical} />
            <Heading size={6} textColor="secondary">
              Render: after
            </Heading>
            <CodePane
              lang="reason"
              source={refs.render.after}
              theme="external"
            />
          </Slide>
          <Slide>
            <CodePane lang="reason" source={refs.final} theme="external" />
          </Slide>
        </Magic>
        <Slide>
          <Heading size={4} textColor="secondary">
            CSS in JS?
          </Heading>
          <Appear>
            <Heading size={6} textColor="secondary">
              Sorry, not yet.
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">
            How about inline styles?
          </Heading>
          <Appear>
            <Heading size={6} textColor="secondary">
              Ok
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary">
            Optional labeled arguments
          </Heading>
          <CodePane lang="reason" source={refs.inlineStyle} theme="external" />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="reason"
          textSize={12}
          code={integration.gameCode}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 14] }
          ]}
        />
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              State: before
            </Heading>
            <CodePane
              lang="reason"
              source={integration.state.before}
              theme="external"
            />
          </Slide>
          <Slide>
            <Audio file={magical} />
            <Heading size={6} textColor="secondary">
              State: after
            </Heading>
            <CodePane
              lang="reason"
              source={integration.state.after}
              theme="external"
            />
          </Slide>
        </Magic>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Actions: before
            </Heading>
            <CodePane
              lang="reason"
              source={integration.actions.before}
              theme="external"
            />
          </Slide>
          <Slide>
            <Audio file={magical} />
            <Heading size={6} textColor="secondary">
              Actions: after
            </Heading>
            <CodePane
              lang="reason"
              source={integration.actions.after}
              theme="external"
            />
          </Slide>
        </Magic>
        <Slide>
          <Heading size={6} textColor="secondary">
            Reducer: before
          </Heading>
          <CodePane
            lang="reason"
            source={integration.reducer.before}
            theme="external"
          />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="reason"
          textSize={12}
          code={integration.finished}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 45] }
          ]}
        />
        <Slide>
          <CodePane lang="reason" source={types} theme="external" />
        </Slide>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Defined As:
            </Heading>
            <CodePane
              lang="reason"
              source={magicBox.interop}
              theme="external"
            />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Used like:
            </Heading>
            <CodePane lang="reason" source={magicBox.usage} theme="external" />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Compiles to:
            </Heading>
            <CodePane lang="js" source={magicBox.compilesTo} theme="external" />
          </Slide>
        </Magic>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Defined as:
            </Heading>
            <CodePane
              lang="reason"
              source={magicPipe.interop}
              theme="external"
            />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Used like:
            </Heading>
            <CodePane lang="reason" source={magicPipe.usage} theme="external" />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Compiles to:
            </Heading>
            <CodePane
              lang="js"
              source={magicPipe.compilesTo}
              theme="external"
            />
          </Slide>
        </Magic>
        <Magic>
          <Slide>
            <Heading size={6} textColor="secondary">
              Defined as:
            </Heading>
            <CodePane
              lang="reason"
              source={magicProp.interop}
              theme="external"
            />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Used like:
            </Heading>
            <CodePane lang="reason" source={magicProp.usage} theme="external" />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Or maybe like this?
            </Heading>
            <CodePane
              lang="reason"
              source={magicProp.altUsage}
              theme="external"
            />
          </Slide>
          <Slide>
            <Heading size={6} textColor="secondary">
              Compiles to:
            </Heading>
            <CodePane
              lang="js"
              source={magicProp.compilesTo}
              theme="external"
            />
          </Slide>
        </Magic>
        <CodeSlide
          transition={[]}
          lang="reason"
          textSize={12}
          code={interop}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 43] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="reason"
          textSize={12}
          code={gameLogic}
          ranges={[
            { loc: [0, 49] }
          ]}
        />
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Three Reasons Why
          </Heading>
          <List>
            <Appear>
              <ListItem>First rate type system for JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy integration with Node projects</ListItem>
            </Appear>
            <Appear>
              <ListItem>The language is cool AF</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Three Reasons Why Not
          </Heading>
          <List>
            <Appear>
              <ListItem>Immaturity</ListItem>
            </Appear>
            <Appear>
              <ListItem>High velocity</ListItem>
            </Appear>
            <Appear>
              <ListItem>Added complexity</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thanks!
          </Heading>
          <Audio file={magic} startAt={174} fadeIn />
        </Slide>
      </Deck>
    );
  }
}
