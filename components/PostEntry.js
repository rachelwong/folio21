// Component: A single post entry on the blog page which has a listing
// Parent: Get data from /pages/blog.js
// Child: n/a

import Link from 'next/link'

const PostEntry = ({ post }) => {

  console.log("in entry post", post)
  const {
    title, mainText, slug, publishedDate, tags
  } = post.fields
  return (
    <div className="post-entry-container">
      <h3>{ title }</h3>
      <ul>{tags.length > 0 && tags.map((tag, tagIndex) => (
        <li key={ tagIndex }>{ tag }</li>
      )) }</ul>
      <p>{publishedDate}</p>
      <Link href={ "/blog/" + slug }><a>Go to Page</a></Link>
    </div>
  )
}

export default PostEntry
