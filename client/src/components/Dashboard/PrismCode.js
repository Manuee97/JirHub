import React from "react"
import Prism from "prismjs"
export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    setTimeout(() => this.highlight(), 0)
  }
  componentDidUpdate() {
    setTimeout(() => this.highlight(), 0)
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }
  render() {
    const { code, plugins, language } = this.props
    return (
        <pre className={`highlight`}>
        <code ref={this.ref} className={`language-js show-language`}>
          {code.trim()}
        </code>
      </pre>
  
    )
  }
}