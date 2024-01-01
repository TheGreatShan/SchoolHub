import AppIcon from "../../components/appicon/AppIcon";
import HorizontalList from "../../components/horizontallist/HorizontalList";
import Navbar from "../../components/navbar/Navbar";


function Home() {
    return(
        <>
        <section className="flex-column" style={{margin: "auto 0px", gap: 20}}>
            <HorizontalList title="Microsoft Apps">
                <AppIcon to="https://teams.microsoft.com" img={require('../../icons/teams.png')}/>
            </HorizontalList>
            <HorizontalList title="Others">
                <AppIcon to="https://notion.so" img={require('../../icons/notion.png')}/>
            </HorizontalList>
        </section>
        
        </>
    );
}

export default Home;