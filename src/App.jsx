import './App.css'
import Header from './components/header/Header'
import PostList from './components/postList/PostList'
import Footer from './components/footer/Footer'
import SideBox from './components/sideBox/SideBox'

function App() {

  return (
    <div className="App" style={{ width: '100%', height: '100vh', boxSizing: 'border-box' }}>
      <Header />
      <section style={{ display: "flex", gap: '50px', width: '100%' }}>
        <PostList />
        <SideBox />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
