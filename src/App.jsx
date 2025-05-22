import { Component } from 'react';
import './App.css';

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
        <div className='container'>
          <div className='jumbotron'>
            <h1>Sample Posts</h1>
          </div>
          <div className='container'>
            <div className='row'>
              {posts.map((post) => (
                <div className='col-md-4 gy-3'>
                  <div className='card'>
                    <div className='card-header'>#{post.id}</div>
                    <div className='card-body'>
                      <h5 className='card-title'>{post.title}</h5>
                      <p className='card-text'>{post.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
