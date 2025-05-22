import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }));
  }

  render() {
    const posts = this.state.posts;

    return (
      <>
        <h1>Duomly 5-Min React App</h1>
        <p>We have {posts.length} posts</p>
      </>
    );
  }
}

export default App;
