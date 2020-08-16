import {createElement, render, Component} from './toy-react.js'

class MyComponent extends Component{
    render() {
        return <div>
            <h1>My Component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div>efg</div>
</MyComponent>, document.body)
