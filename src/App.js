import { Routes, Route } from "react-router-dom"
import Main from "./components/main/main"
import About from "./components/about/about"
import UserInfo from "./components/userinfo/userInfo"
import AppLoader from "./components/ui/hoc/appLoader"

function App() {
    return (
        <div className="App">
            <AppLoader>
                <Routes>
                    <Route path="/" Component={Main} />
                    <Route path="/about" Component={About} />
                    <Route path="/userinfo/:id?" Component={UserInfo} />
                </Routes>
            </AppLoader>
        </div>
    )
}

export default App
