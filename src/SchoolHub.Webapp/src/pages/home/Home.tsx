import AppIcon from "../../components/appicon/AppIcon";
import HorizontalList from "../../components/horizontallist/HorizontalList";
import Navbar from "../../components/navbar/Navbar";


function Home() {
    return(
        <>
        <Navbar/>
        <section style={{margin: "auto 0px"}}>
            <HorizontalList title="Microsoft Apps">
                <AppIcon img={require('../../icons/teams.png')}/>
            </HorizontalList>
        </section>
        
        </>
    );
}

export default Home;