import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create()
{
    const history = useNavigate();
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Durga');
    const [pending,setPending] = useState(false);

    function handleSubmit(e)
    {
        setPending(true);
        e.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            setPending(false);
            history('/');
        })
    }
    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    type="text"  
                    required 
                />
                <label>Blog Body:</label>
               <textarea 
                    value={body} 
                    required 
                    onChange={(e)=>setBody(e.target.value)} 
                />
               <label>Blog Author:</label>
               <select 
                    required
                    value={ author }
                    onChange = { (e)=> setAuthor(e.target.value) }
                >
                  <option value="Durga">Durga</option>
                  <option value="Devi">Devi</option>
                  <option value="DD">DD</option>
               </select>
               { !pending && <button>Add Blog</button> }
               { pending && <button disabled>Blog Adding....</button>}
            </form>
        </div>
    );
}

export default Create;