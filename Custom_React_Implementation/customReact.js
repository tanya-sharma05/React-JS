function customRender(reactElement,Container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    for(let prop in reactElement.props){
        if(prop==='children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    Container.appendChild(domElement);
};

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Google!'
};

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer);