# what is this?

A way for you to bootstrap an ES6 project for Tabletop Playground within VSCode, as well as let you use ES6 and git more readily

# requirements

Node v16,
VSCode
Yarn (can't use npm)

# Starting a new project

run ``yarn install``
edit ``config/project.json`` to reflect the values you want. "slug" is just the directory name, and there are two GUIDs - one for development, one for the production bundle (this way you can have them set along side each other).
run ``yarn setup``
run ``yarn dev`` (to build the scripts TTPG is looking at) or ``yarn watch`` (live updates on the saving of scripts)
add and edit your scripts within the ``src/`` directory.

Any dependency you add with ``yarn add {module}`` will added to your bundles ``node_modules`` directory when you run ``yarn dev``
Dependencies added with ``yarn add -D {module}`` (devDependenices) will ***not*** get bundled or built.

# I've cloned my team's project that was based on this bootstrap, now what?

as above, but you don't need to edi the config/project.json

run ``yarn install``
run ``yarn setup``
run ``yarn dev`` or ``yarn watch``

# Bundling

if you run ``yarn bundle`` it will package build your scripts from the ``src/`` folder, build the ``node_modules`` folder that TTPG will need, and take the contents of your ``assets/`` and throw it into a Zip file within ``bundles/``.

# Cleaning

if you run ``yarn clean`` it will remove the ``dev/`` folder, as well as the project folder within your ttpg system and remove and temporary files. You can then run ``yarn setup`` again to get everything re-allocated.

# I have a problem/idea

I'm on the TTPG discord (@ThatRobHuman), and you can hit me up here. I *absolutely* welcome pull requests.
