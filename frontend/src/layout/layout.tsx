import Header from "@/components/Header/Header"
import HomePage from "@/components/HomePage/HomePage"

type Props = {
    child: React.ReactNode
}

const Layout = ({childer}:Props) =>{
    return(
        <div className="flex min-h-screen flex-col">
            <Header />
            <HomePage />
        </div>
    )
}
export default Layout