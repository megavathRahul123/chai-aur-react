function customRender(reactElement,container){

   /*
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;
    domelement.setAttribute('href', reactElement.props.href);
    domelement.setAttribute('target', reactElement.props.target);
    container.appendChild(domelement);
    */

    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domelement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domelement);
}
// Define the container first
const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
};

// Now call the function after defining mainContainer
customRender(reactElement, mainContainer);
