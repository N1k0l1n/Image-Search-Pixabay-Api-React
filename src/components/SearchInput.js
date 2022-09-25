import React from "react";
import Button from "./Button";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={{ marginBotton: 40 }}>
            <Button
              onChange={(event) => this.setState({ entry: event.target.value })}
              entry={this.state.entry}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;
