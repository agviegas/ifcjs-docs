import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        energy simulations, creating project documents, and so on.
      </p>
      <p>
        These tools come from multiple developers around the world and each one
        works in its own format. In other words, the structural model created by
        a structural calculation application cannot be read by the energy
        simulation programme, and vice versa. So how is it possible to create a
        model of a building from multiple tools? The answer is <b>IFC</b>.
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
        IFC file reader and writer for their applications when we all want from
        IFC files is the same thing: to get the geometry and the data. That's
        why we created IFC.js.
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
        <li>
          <p>
            <b>Geometry</b>: IFC.js is able to generate 3D scenes because it is
            compatible with 3D libraries such as Three.js or Babylon.js. This
            means that you can create tools that interact with these 3D models
            by taking advantage of the high-level API of these libraries.
          </p>
        </li>
        <li>
          <p>
            <b>Data</b>: high-level access to all the properties associated with
            that geometry. This means easy access to data on the building
            components, their materials, thermal characteristics, structural
            strength, etc.
          </p>
        </li>
      </ul>
      <p>
        Creating a BIM applications with IFC.js is as easy as creating a webpage
        with JavaScript, HTML and CSS. It's as simple as this:
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
        In this example Three.js is being used to create the 3D scene (you can
        find the full example
        <a
          href="https://github.com/tomvandig/web-ifc-three/tree/main/examples/jsm"
          className="inline-link"
          target="_blank" rel="noreferrer"
        >
          here
        </a>
        and the deployed app
        <a
          href="https://tomvandig.github.io/web-ifc/examples/viewer/index.html"
          className="inline-link"
          target="_blank" rel="noreferrer"
        >
          here
        </a>
        ). There are other modules of the library that work with other 3D
        libraries like Babylon.js. As you can see, just two lines of code are
        enough to load IFC files into any 3D JavaScript application.
      </p>
      <div className="title-frame">
        <h2>What can I do with IFC.js?</h2>
      </div>
      <h3>What makes IFC.js different?</h3>
      <p>
        WIP
      </p>
      <h3>Multiplatform</h3>
      <p>
        You can use IFC.js to create BIM applications for any platform. It is a
        JavaScript library; this means it works in browsers, but it is also
        compatible with servers (Node) and native applications (Electron, React
        Native).
      </p>
      <h3>Speed</h3>
      <p>
        If you have experience with web applications, you might be thinking that
        the weak point of a JavaScript-based IFC library is performance.
        However, the core of the library is developed in C++ with WebAssembly
        and designed specifically for maximum performance. Despite being
        relatively young, IFC.js is already capable of approaching the speed and
        performance of desktop applications.
      </p>
      <h3>License</h3>
      <p>
        WIP
      </p>
      <h3>Features</h3>
      <p>
        WIP
      </p>
      <div className="title-frame">
        <h2>Who can use this library</h2>
      </div>
      <p>
        This library is for anyone who wants to develop IFC-compliant BIM
        applications. This includes developers and computer engineers involved
        in the development of applications for the construction industry, but
        also architects and other professionals interested in programming who
        want to take advantage of the data in the IFC files they handle.
      </p>
      <p>
        If you have any specific question, you can either post an issue in the
        Github repositories or directly ask us in the
        <a
          href="https://discord.com/invite/hXxB8SSW"
          className="inline-link"
          target="_blank" rel="noreferrer"
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
          href="https://threejsfundamentals.org/"
          className="inline-link"
          target="_blank" rel="noreferrer"
        >
          here.
        </a>
      </p>
      <p></p>
      <div className="title-frame">
        <h2>Contribute</h2>
      </div>
      <p>
        WIP
      </p>
      <div className="title-frame">
        <h2>Source code</h2>
      </div>
      <p>WIP</p>
    </div>
  );
};

export default IntroSection;
