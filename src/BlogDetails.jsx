import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

function BlogDetails()
{
    const history = useNavigate();
    const { id } = useParams();
    const { data:blog,pending,error } = useFetch('http://localhost:3000/blogs/'+id);

    function handleDelete() 
    {
        var flag = false;
        if (blog.id==="1" || blog.id==="2" || blog.id==="3") {
            flag = true;
        }

        if(flag)
        {
            console.log(blog.id);
            alert("This is standard blog can't be deleted..");
            return;
        }
        else
        {
            fetch('http://localhost:3000/blogs/' + blog.id, {
                method: 'DELETE'
            }).then(() => {
                console.log("Deleted");
                history('/'); // Redirect to home page after deletion
            }).catch((error) => {
                console.error("Error deleting blog:", error);
            });
        }
    }    
    return(
        <div className="BlogDetails">
            { pending && <h1 style = {{marginLeft : '300px', color:'rgba(73,173,244'}}>Loading....⏳</h1>}
            { error && <h1 style ={{color:'rgb(73, 173, 244)'}}>{ error }</h1>}
            { blog && (
                <article className="blog-detail">
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete} className="delete">Delete Blog</button>
                </article>
            )}
        </div>
    )
}
export default BlogDetails;