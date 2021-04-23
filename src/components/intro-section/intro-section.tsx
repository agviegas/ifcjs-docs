import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import routes from "../../routes";

const IntroSection = () => {
  return (
    <div className="text-container">
      <div className="title-frame">
        <h2>What is IFC.js?</h2>
      </div>
      <h3>IFC... what?</h3>
      <p>
        Architects no longer draw building plans one by one, but create 3D
        models of buildings, much like the houses modelled in The SIMS. This way
        of working is called <b>BIM</b> (Building Information Model), because
        the models created contain both geometry and information.
      </p>
      <p>
        However, a building is so complex that there is no single application
        that can create these models in their entirety. Each application has a
        specific mission: modelling geometry, calculating structures, making
        energy simulations, creating project documents, and so on. These tools
        come from multiple developers around the world and each one works in its
        own format. In other words, the structural model created by a structural
        calculation application cannot be read by the energy simulation
        programme, and vice versa. So how is it possible to create a model of a
        building from multiple tools? The answer is
        <a
          href={routes.ifcDocs}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          IFC.
        </a>
      </p>
      <p>
        IFC is a format created by BuildingSMART to contain these 3D models of
        buildings. It is open, so anyone can read and write it. It is equivalent
        to the OBJ or glTF formats for 3D and videogames. Thanks to IFC any
        developer can freely create BIM apps that can communicate with the apps
        of the big development companies in the construction sector. Yay!
      </p>
      <h3>The problem</h3>
      <p>
        Unfortunately, IFC is a format that is difficult to read and write. That
        is, anyone who wants to make a BIM application that reads and writes IFC
        files will first have to study the thousands of pages of documentation
        and create and maintain an IFC parser from scratch. We are talking about
        thousands of lines of low-level parsing code. This is what an IFC looks
        like from inside:
      </p>
      <SyntaxHighlighter className="round" language="javascript" style={agate}>
        {`
        #6699= IFCCARTESIANPOINT((0.,-1.70530256582424E-13));
        #6701= IFCAXIS2PLACEMENT2D(#6699,#23);
        #6702= IFCRECTANGLEPROFILEDEF(.AREA.,'SH_Curtain wall',#6701,5700.,1380.);
        #6703= IFCCARTESIANPOINT((892.,-253.399999999998,150.));
        #6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);
        #6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);
        #6707= IFCCOLOURRGB($,0.501960784313725,0.501960784313725,0.501960784313725);
      `}
      </SyntaxHighlighter>
      <p>
        Even if you are willing to create a parser from scratch and maintain it
        with every change in the IFC schema, there are several non-trivial
        questions to tackle this problem. How to manage memory in very large
        files? How to implement geometric generation of all geometry types
        efficiently? What to do when an IFC has not been defined correctly (e.g.
        with a spatial structure with wrong coordinate system)?
      </p>
      <h3>IFC.js to the rescue</h3>
      <p>
        It wouldn't make sense for all developers to have to implement their own
        IFC file reader and writer for their applications when what we all want
        from IFC files is the same thing: to get the geometry and the data.
        That's why we created IFC.js.
      </p>
      <p>
        IFC.js is a JavaScript library that makes it easy to read and write IFC
        files. This allows developers of architecture and construction
        applications to work in IFC effortlessly and focus on the
        functionalities that really add value to their business.
      </p>
      <h3>IFC.js in a nutshell</h3>
      <p>IFC.js reads IFC files and generates two things:</p>
      <ul>
        <li className="list-bullet">
          <p>
            <p>
              <i className="fas fa-cube fa-lg inline-icon"></i>
              <b>Geometry</b>: IFC.js is able to generate 3D scenes because it
              is compatible with 3D libraries such as Three.js or Babylon.js.
              This means that you can create tools that interact with these 3D
              models by taking advantage of the high-level API of these
              libraries.
            </p>
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <p>
              <i className="fas fa-database fa-lg inline-icon"></i>
              <b>Data</b>: high-level access to all the properties associated
              with that geometry. This means easy access to data on the building
              components, their materials, thermal characteristics, structural
              strength, etc.
            </p>
          </p>
        </li>
      </ul>
      <p>
        Creating a BIM applications with IFC.js is as easy as creating a webpage
        with JavaScript, HTML and CSS:
      </p>
      <SyntaxHighlighter className="round" language="javascript" style={agate}>
        {`
      import { IfcLoader } from 'web-ifc-three';
      import { Scene } from 'three';

      //Creates THREE.js scene
      const scene = new Scene();

      ...
      
      //Loads IFC and adds it to the scene
      const ifcLoader = new IfcLoader();
      ifcLoader.load(ifcURL, (geometry) => scene.add(geometry));
      `}
      </SyntaxHighlighter>
      <p>
        In this example Three.js is being used to create the 3D scene. You can
        find the full example
        <a
          href={routes.ifcjsHelloWorld}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        and the deployed app
        <a
          href={routes.ifcjsHelloWorldDeploy}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
        There are other modules of the library that work with other 3D libraries
        like Babylon.js. As you can see, just two lines of code are enough to
        load IFC files into any 3D JavaScript application.
      </p>
      <div className="title-frame">
        <h2>Who can use this library</h2>
      </div>
      <p>
        This library is for anyone who wants to develop IFC-compliant BIM
        applications. This includes developers and computer engineers involved
        in the development of applications for the construction industry, but
        also architects and other professionals interested in programming who
        want to take advantage of the data in the IFC files they handle. If you
        have any specific question, you can either post an issue in the Github
        repositories or directly ask us in the
        <a
          href={routes.community}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Discord channel.
        </a>
      </p>
      <p>
        Bear in mind that to use this library, it is necessary to have a basic
        knowledge of JavaScript, HTML and CSS. This knowledge is beyond the
        scope of this documentation. You'll also need to use some 3D library to
        display the geometry of the IFC (Three.js or Babylon.js). If you don't
        know where to start, we suggest you to take a look
        <a
          href={routes.threeFundamentals}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
      </p>
      <div className="title-frame">
        <h2>What can I do with IFC.js?</h2>
      </div>
      <h3>Why is IFC.js different?</h3>
      <p>
        IFC.js is a library written by and for JavaScript, arguably one of the
        most ubiquitous languages. This means that it is compatible with web
        browsers, desktop and mobile applications. JavaScript is also one of the
        easiest languages to learn, and allows you to build user interfaces with
        HTML and CSS. In other words, creating BIM applications with IFC.js is
        as easy as creating a web page.
      </p>
      <h3>Multiplatform</h3>
      <p>
        You can use IFC.js to create open BIM applications for any platform:
      </p>
      <ul>
        <li className="list-bullet">
          <p>
            <p>
              <i className="fas fa-window-restore fa-lg inline-icon"></i>
              <b>Web</b>: frontend web applications that read and write IFC
              files and display 3D without relying on server communication can
              be created using Vanilla JavaScript or other tools such as React,
              Vue, Angular, Svelte, etc. That is, with IFC.js we can turn any
              web browser into an open BIM application. Do you think a browser
              is not powerful enough to process an IFC and display the 3d as a
              native application? You can see for yourself in the
              <a
                href={routes.threeIfcExample}
                className="inline-link"
                target="_blank"
                rel="noreferrer"
              >
                official Three.js example
              </a>
              , which uses IFC.js.
            </p>
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-server fa-lg inline-icon"></i>
            <b>Server</b>: There are cases where the IFC file cannot be
            processed at the client. For example, a mobile device may not have
            the power to display several medium or large IFCs. In this case it
            is possible to use IFC.js on the server via
            <a
              href={routes.node}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              Node.js
            </a>
            and send the Three.js scene already prepared to the client.
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-desktop fa-lg inline-icon"></i>
            <b>Desktop</b>: Sometimes we don't want to create web applications,
            but native desktop applications that run on Windows or iOS. This is
            possible thanks to technologies like
            <a
              href={routes.electron}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              Electron
            </a>
            . These native applications will be programmed in the same way as
            web applications; HTML, CSS, JavaScript, React, Vue, etc.
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-mobile-alt fa-lg inline-icon"></i>
            <b>Mobile</b>: IFC.js also supports
            <a
              href={routes.reactNative}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              React Native
            </a>
            mapping WebGL code to native OpenGL. This means that you can create
            IFC-compatible Open BIM apps that run on Android and iOS without any
            additional effort.
          </p>
        </li>
      </ul>
      <h3>Speed</h3>
      <p>
        If you have experience with web applications, you might be thinking that
        the weak point of a JavaScript-based IFC library is performance.
        However, the core of the library is developed in C++ combined with
        WebAssembly and
        <a
          href={routes.emscripten}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Emscripten.
        </a>
        It is designed specifically for maximum performance, allowing IFC.js to
        approach the speed and performance of desktop applications while running
        directly in the browser.
      </p>
      <h3>Features</h3>
      <p>Currently IFC.js can:</p>
      <ul>
        <li className="list-bullet">
          <p>
            <i className="fas fa-th-list fa-lg inline-icon"></i>
            Read IFC files
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-cubes fa-lg inline-icon"></i>
            Generate 3D geometry
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-eye fa-lg inline-icon"></i>
            Edit geometry display
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-city fa-lg inline-icon"></i>
            Load multiple models
          </p>
        </li>
      </ul>
      <p>We are currently working to be able to:</p>
      <ul>
        <li className="list-bullet">
          <p>
            <i className="fas fa-filter fa-lg inline-icon"></i>
            Retrieve IFC properties
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <i className="fas fa-edit fa-lg inline-icon"></i>
            Write IFC files
          </p>
        </li>
      </ul>
      <div className="title-frame">
        <h2>Source code</h2>
      </div>
      <p>
        IFC.js is a large, multi-language library (C++, TypeScript, JavaScript,
        etc). Having it in a single repository would be difficult and unwieldy.
        For that reason, the library exists in multiple repositories, where each
        one has its own purpose:
      </p>
      <ul>
        <li className="list-bullet">
          <p>
            <a
              href={routes.webIfc}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-code-branch fa-lg inline-icon"></i>
              web-ifc
            </a>
            is the repository containing the core of the library: a parser and
            geometry generator written from scratch in C++ and compiled via
            Emscripten to WebAssembly. This repository encapsulates the
            complexity of reading IFC files and loading their data into memory.
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <a
              href={routes.webIfcThree}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-code-branch fa-lg inline-icon"></i>
              web-ifc-three
            </a>
            is the library that adapts web-ifc to Three.js geometric entities.
            This library is the
            <a
              href={routes.threeIfcExample}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              official IFC Loader of Three.js.
            </a>
            Thanks to this adapter, open BIM applications can be created with
            Three.js in just two lines of code.
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <a
              href={routes.webIfcBabylon}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-code-branch fa-lg inline-icon"></i>
              web-ifc-babylon
            </a>
            is the adaptation of this library for babylon.js.
          </p>
        </li>
        <li className="list-bullet">
          <p>
            <a
              href={routes.webIfcViewer}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-code-branch fa-lg inline-icon"></i>
              web-ifc-viewer
            </a>
            is a browser-based IFC viewer and a boilerplate library with many
            examples of what can be done with IFC.js and three.js. All BIM
            applications have common functionalities: scene navigation, material
            changes, element selection by clicking on them, section plans, etc.
            There is an example of all these functionalities in this repository,
            so it can be reused in open BIM applications out of the box. You can
            try it
            <a
              href={routes.webIfcViewerExample}
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </li>
      </ul>
      <div className="title-frame">
        <h2>Contribute</h2>
      </div>
      <p>
        Do you want to help us keep improving the world of Open BIM development
        with IFC.js? The library is big, so you will have to choose where you
        want to participate.
      </p>
      <p>
        If you are passionate about C++, WebAssembly, parsing or the low-level
        implementation of the IFC standard, you can help us with web-ifc. This
        is the largest and most complex library of all. On the other hand, if
        you are a Three.js developer and would like to contribute to the
        library, you can help us with web-ifc-three, which is the official
        Three.js IFC Loader (geometry optimisation, building the IFC Loader API,
        etc). Similarly, if Babylon.js is your thing, you can help us improve
        web-ifc-babylon. Finally, if you are only interested in building Open
        BIM applications and you have great ideas for BIM tools or user
        interfaces, the best thing to do is to help us make web-ifc-viewer the
        best IFC viewer on the market.
      </p>
      <p>
        In any case, we encourage you to stop by the
        <a
          href={routes.community}
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Discord channel,
        </a>
        say hello and tell us what's on your mind so we can give you some
        guidance
      </p>
    </div>
  );
};

export default IntroSection;
