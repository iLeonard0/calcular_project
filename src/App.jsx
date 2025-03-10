import './App.css'
import Header from './components/header/Header'
import PostList from './components/postList/PostList'
import Footer from './components/footer/Footer'
import SideBox from './components/sideBox/SideBox'

function App() {

  return (
    <div className="App">
      <Header />
      <section style={{ display: "flex" }}>
        <PostList />
        <SideBox/>
      </section>
      <Footer />
    </div>
  )
}

export default App
