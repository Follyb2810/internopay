import CurrencyConvertion from "../Components/CurrencyConvertion";
import Header from "../Components/Header";
// import StockMarketReports from "../Components/StockMarketReports";
import NewsFeed from "../Components/NewsFeeds";

export default function Home(){
    return (
        <>
            <Header/>
            <CurrencyConvertion/>
            <h1>Financial Feeds</h1>
            {/* <StockMarketReports/> */}
            <NewsFeed/>
        </>
    )
}