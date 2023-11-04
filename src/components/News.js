import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    //document.title=`${capitalizeFirstLetter(props.category)}-NewsDaily`;

    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    const updateNews = async()=>{        
        props.setProgress(10);
        //backticks used to make pageSize variable
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }


    useEffect(() => {
            document.title=`${capitalizeFirstLetter(props.category)}-NewsDaily`;
            updateNews();
            // eslint-disable-next-line
    },[])

    
    /*const handlePrevClick = async () => {
        //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.//category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        //setState({loading: true});
        //let data = await fetch(url);
        //let parsedData = await data.json();
        //setState({
        //    articles: parsedData.articles,
        //    page: state.page - 1,
        //    loading: false
        //})
        setPage(page-1)
        updateNews()
    }
    const handleNextClick = async () => {
        //if (!(state.page + 1 > Math.ceil(state.totalResults/props.pageSize))){
        //    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
        //    setState({loading: true});
        //    let data = await fetch(url);
        //    let parsedData = await data.json()
        //    console.log(parsedData);  
        //    setState({
        //        page: state.page + 1,
        //        articles: parsedData.articles,
        //        loading: false
        //    })
        //}
        setPage(page+1)
        updateNews()
    }*/
    const fetchMoreData = async() => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };
    return (
        <>
            <h1 className='text-center' style={{margin:'30px 0px',marginTop:'90px' }} >NewsDaily-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {/*show spinner only during loading*/}
                {/*{loading && <Spinner/>}*/}

            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={loading && <Spinner/>}>
                <div className="container">
                    <div className="row">
                        {articles.map((element,index) => {
                            return <div className="col-md-3" key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage} author={!element.author?"unknown":element.author} date={element.publishedAt} newsURL={element.url} />
                                    {/*if we want all the description and title to be of same size then we can use it as--title={element.title?element.title.slice(0,45):""}
                                    --description={element.description?element.description.slice(0,88):""}*/
                                    }
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>    
        </>
    )
}
News.defaultProps={
    country: 'in',
    pageSize: '10',
    PropTypes: 'general',
}
News.propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;
