import React from "react";
import { useRouteMatch } from "react-router-dom";
import CommentOnPost from "./CommentOnPost";

interface Props {}

interface BlogPostParams {
  id: string;
}

const POST_DATA = {
  title: "Semester",
  headImage: "https://img.jpg",
  sections: [
    {
      title: "section-title",
      text: "Åh vad kul vi hade i maldiverna",
      image: "http://sahfhasf.jpg",
      externalLink: "https://external.link"
    },
    {
      title: "section-title2",
      text: "Men det snöade",
      image: "http://sahfhasf.jpg",
      externalLink: "https://external.link"
    },
    {
      title: "section-title3",
      text: "Vi åkte skidor istället",
      image: "http://sahfhasf.jpg",
      externalLink: "https://external.link"
    }
  ]
};

const SelectedBlogPost: React.FC<Props> = () => {
  const match = useRouteMatch<BlogPostParams>({
    path: "/blog/:id"
  });
  const id = match?.params.id;
  return (
    <div>
      <div>You have selected blog post {id}</div>
      <h1>{POST_DATA.title}</h1>
      <img
        style={{ width: 200, height: 200 }}
        src={`https://source.unsplash.com/1600x900/?${id}`}
      />

      {POST_DATA.sections.map(section => (
        <div>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
        </div>
      ))}
      {id && <CommentOnPost id={id} />}
    </div>
  );
};

export default SelectedBlogPost;
