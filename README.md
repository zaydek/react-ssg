When was the last time you felt joy developing web apps _and_ deeply understood your stack?

This repo is meant to:

- Engage you intellectually: You should understand your tools and your tools should understand you
- Provide the necessary structure to kickstart your next server-generated React app

## Why?

Currently, if you want to build a server-generated React app, your choices are somewhat bleak. You can use Gatsby.js or
Next.js, or you can roll your own server.

So what’s wrong with Gatsby.js and Next.js? Nothing — really. They work. But for me, _I want more for less_. I want to
understand my tools without exhausting myself in the process. And I want my tools to understand me. What does that mean
materially? I don’t want to marry myself to a modern monolith only to have the industry move on in a few years / months.
All things considered, I would rather _invest in myself_. Who wouldn’t want to be more competent and autonomous?

What about rolling your own server? Well, that _is_ what this is, but without a lot of the hassle you might otherwise
encounter. As you’ll discover by reading on, this configuration requires no custom express server, no Babel, and no
webpack. 🤭

## How does this work?

It’s important to understand that this development environment has minimal dependencies:

**Dependencies**

- React
- React DOM
- React Router DOM

**Developer dependencies**

- (Types for typed dependencies)
- TypeScript
- ts-node
- esbuild
- watch (rebuilds our app)
- serve (serves our app)

_That’s it._ So consider this, with this configuration _you don’t need to think or worry or configure Babel_. Because
your app is compiled via the TypeScript compiler, Babel becomes obsolete. Huh? Babel transpiles JSX to JS so browsers
can actually understand your code. Just in case this wasn’t clear to you, browsers can’t actually interpret JSX on their
own. So Babel is a tool that provides a translation layer between your code and standard JS so everyone’s happy. But
guess what? You don’t actually need Babel if you use TypeScript, because the TypeScript compiler can compile TSX and JSX
down to JavaScript, and therefore the browsers are happy. 😄

Using TypeScript is also a good idea because it means our apps are type-safe by default. No, you don’t have to use
TypeScript, but should you? It depends. But yeah, TypeScript pays for itself once you get over the learning curve. So
why not? Full disclosure: It took me like 4-5 tries to really value TypeScript. So if you don’t get it at first, don’t
be discouraged.

OK what about ts-node? The thing is, while the TypeScript compiler can compile your code, it actually can’t / doesn’t
_run_ your code. What? Well browsers run your code, or Node can run your code, but if you want to run your TypeScript
code, you can use ts-node as a mechanism to invoke Node to run your TypeScript server-side. Alternatively, you can just
use Node if TypeScript isn’t for you.

And what’s the deal with esbuild? We need a way to bundles our code for the browser, not just compile down from TSX /
JSX to JS. Instead of learning / configuring webpack, we can actually just use esbuild. esbuild is an amazing tool that
bundles your code for the browser. What does that mean? Generally, you want to be able to use `import` and `export` to
compose your apps logically, and you want to ship one script file (if possible) to the browser. This is exactly what
esbuild enables us to do: We don’t need to concern ourselves with anything besides app development because esbuild
bundles our code for the browser. Best of all, esbuild is actually written in Go and is wicked fast.

So what happens when we create a development environment around these tools?

- No Babel
- No webpack
- Build times are measured in milliseconds-seconds
- We understand our tools and their scope
- We are more competent and more autonomous

At worst, this is a fanciful experiment that demonstrates the power of thinking from first principles, as applied to
server-side generated React, and at best this is the new baseline for how I develop all future web apps.
