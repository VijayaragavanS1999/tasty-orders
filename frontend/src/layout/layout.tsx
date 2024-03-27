import Header from "@/components/Header/Header"

type Props = {
    child: React.ReactNode
}

const Layout = ({childer}:Props) =>{
    return(
        <div className="flex min-h-screen">
            <Header />
        </div>
    )
}
export default Layout