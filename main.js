import {createElement, render, Component} from './toy-react.js'

class MyComponent extends Component{
    constructor() {
        super()
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return <div>
            <h1>My Component</h1>
            <button onClick={() => this.setState({a: this.state.a+1})}>Add</button>
            <div>{this.state.a.toString()}</div>
            <div>{this.state.b.toString()}</div>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div>efg</div>
</MyComponent>, document.body)
