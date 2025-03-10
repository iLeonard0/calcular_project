import './App.css'
import Header from './components/header/Header'
import PostList from './components/postList/PostList'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <section style={{ display: "flex" }}>
        <PostList />
        <div style={{ backgroundColor: 'purple', width: '50%', height: 1000 }}>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
