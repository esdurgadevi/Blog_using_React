import BlogList from './BlogList.jsx'
import useFetch from './useFetch.jsx'
function Home()
{
    const { data:blogs,pending,error} = useFetch('http://localhost:3000/blogs');
    return(
        <div>
            { error && <h1 style ={{color:'rgb(73, 173, 244)'}}>{ error }</h1>}
            { pending && <h1 style = {{marginLeft : '300px', color:'#f1356d'}}>Loading....⏳</h1>}
            { blogs && <BlogList blogs={blogs} title={"All blogs!"} /> }
            { blogs && <BlogList blogs={ blogs.filter((blog)=>blog.author=="Durga")} title={"Durga's blogs!"} />}
            { blogs && <BlogList blogs={ blogs.filter((blog)=>blog.author=="Devi")} title={"Devi's blogs!"} />}
        </div>
    )
}

export default Home;