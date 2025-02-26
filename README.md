### Blog Website using React
![image](https://github.com/user-attachments/assets/d480f8b6-e077-424e-b1a7-ae339e8ed539)
<br>
- This website is blog read add and delete website using the local json server and the get the data from that server and shown the data also delete the data.
- In the App component we link to different pages using the react router dom In that componet show the navbar using navbar component.
- In the routes give the path for all the pages create blog list and the error page also.
- In the home page all blogs headings are shown.
- In the home component show all the blogs title and author so render the bloglist component and send the blogs as props that are fetch from the local json server.
- so in this component all the blogs details are shown.
- and also provide the link to the particualr blog `blogs/$blog.id` it will go tot the particular blog
- In blogdetails path is same <Route path="/blogs/:id" element={<BlogDetails />} /> so it will go to the blog details page
- In the blog details componenet fetch the particular blog using the id if the blog exist (blog && ) then show the all details of blog also a delte option.
- If the blog is delete means it will remove from the json server. using the method : "DELETE".
#### Create Blog
![image](https://github.com/user-attachments/assets/ac005128-917d-48c1-9ccf-6a986e7bb9aa)
<br>
- Using create blog button create the new blog and add to the server.
- fetch the sserver using url and use the post method and convert the blog to the json format and post it. 
