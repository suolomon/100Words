import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             alt="single-page-details" 
             className="singlePostImg"
             />
             <h1 className="singlePostTitle">
                 Lorem ipsum dolor sit amet.
                 <div className="singlePostEdit">
                     <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash-can"></i>
                 </div>
                 </h1>
                 <div className="singlePostInfo">
                     <span className="singlePostAuthor">Author: <strong>Solomon</strong></span>
                     <span className="singlePostDate">1 hour ago</span>
                 </div>
                 <p className="singlePostDesc">
                 Lorem ipsum o consequuntur corporis numquam vitae, 
                 est veniam possimus eveniet? Unde, exercitationem a? Esse cupiditate distinctio a, 
                 in libero at autem possimus fugit cupiditate veritatis sint quisquam maiores quia 
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 Lorem ipsum o consequuntur corporis numquam vitae, 
                 est veniam possimus eveniet? Unde, exercitationem a? Esse cupiditate distinctio a, 
                 in libero at autem possimus fugit cupiditate veritatis sint quisquam maiores quia 
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 Lorem ipsum o consequuntur corporis numquam vitae, 
                 est veniam possimus eveniet? Unde, exercitationem a? Esse cupiditate distinctio a, 
                 in libero at autem possimus fugit cupiditate veritatis sint quisquam maiores quia 
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 neque, aspernatur reiciendis id sequi, soluta omnis iusto necessitatibus odio nihil?
                 
                 </p>
        </div>
    </div>
  )
}

export default SinglePost