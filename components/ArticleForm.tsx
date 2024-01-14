"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { ArticleCategories } from "./ArticleCategories";
import TiptapEditor from "./TipTapEditor";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    category: ""
  });

	const [content, setContent] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: [value] }));
  };

  return (
    <form className="flex flex-col gap-3">
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="tagline"
        placeholder="Tagline"
        value={formData.tagline}
        onChange={handleChange}
        required
      />
			<ArticleCategories/>
			<TiptapEditor setContent={setContent}/>
    </form>
  );
};

export default ArticleForm;
