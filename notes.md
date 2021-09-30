# generate new project
`ng new <name>`

# start angular project
`npm start`
`ng serve`

# deploy
`npm install now -g`
`now login`
`now`

# generate component
`ng g c <name>`

# property binding
`[class]="compare()"`

# pipes 
google angular pipes
1.2-2 print at most 1 digit pre . 
               min 2 digits max 2 digits post .


# generate custom pipe
`ng g p <name>`

# ngClass directive
strucuture directive changes the structure of the html
<ng-container> to wrap and take upon one directive, for when you need two structure directives on the same component, 

# generate custom attribute directive
`ng g directive <name>`

# generate custom structural directive
`ng g directive <name>`
`ViewContainer` reference to the template/component
`TemplateRef` reference to the elements in the template/component

# generate module
`ng g m <name> --routing` 
--routing to make this module ready for navigation ( Routing\Routed ) 
will contain <name>-routing.module.ts along

# generate component as child of another component
`ng g c <parent-name>/<name>

# modules
 - declarations = list of components, pipes, directives that are created in this module
 - imports = list of other modules that this module depends upon
 - export = list of components, pipes, directives that this module makes available to other modules
 - providers = old way of connecting modules and services
 - bootstrap = used by the appmodule only to declare what component will be displayed first

# lazy load route
 - path: '<name>' , loadChildren: () => import('<path>').then(m => m.<name>module)

# shared modules aka widgets
 - `ng g m Shared`
 - `ng g c shared/<name>`

# get children wrapped in parent component with <ng-content/>
# div.ui.icon.header:empty {
    display: none;
}

# Input aliasing
@Input('alias') <actualname>

# Typescript

# Service
`ng g s wikipedia`

# Generate module routing
`ng g m Auth --routing`