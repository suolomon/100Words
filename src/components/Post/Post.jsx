import './Post.css'

const Post = () => {
  return (
    <div className="post">
        <img className="postImg"src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="post-image" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <div className="postTitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, id.
            </div>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vero commodi culpa 
                sit eius dignissimos mollitia ipsum voluptas officia magni.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                sunt aperiam dolores a labore. Dolor placeat quis debitis, corporis 
                error nesciunt quam quisquam, ipsam distinctio minus nobis consequuntur 
                mollitia aut accusamus incidunt doloribus veritatis, pariatur sit consectetur
                voluptates! Sit similique, odio dolores quod provident nemo adipisci eligendi omnis. 
                Fugit architecto odit, voluptatem, sed libero enim hic magni quo aperiam nostrum nihil 
                corporis magnam, delectus officia provident eveniet ipsam obcaecati a illo praesentium 
                exercitationem eaque atque necessitatibus! Harum culpa eligendi magnam aliquam ea iure minus 
                veritatis quas. Blanditiis sapiente quidem consequatur fugiat exercitationem esse perspiciatis velit 
                numquam eum distinctio, odio perferendis ipsa? Totam, obcaecati necessitatibus? A ipsam veritatis autem 
                aliquam in ullam consequatur, maiores nulla quaerat ratione dolorum distinctio labore modi minus culpa. 
                Quam animi totam voluptates ea eligendi distinctio, exercitationem harum doloribus fuga atque vitae 
                alias dolor cum! Officiis fuga animi beatae, aut soluta ex deleniti reprehenderit eligendi. Repudiandae, qui!
                </p>
    </div>
  )
}

export default Post