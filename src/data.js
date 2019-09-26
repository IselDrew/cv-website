import uniqid from "uniqid"

import testImg from "./images/testImg.png"

export const titles = [
  {
    name: "home",
    id: uniqid(),
    url: process.env.PUBLIC_URL + "/",
  },
  {
    name: "about",
    id: uniqid(),
    url: process.env.PUBLIC_URL + "/about",
  },
  {
    name: "projects",
    id: uniqid(),
    url: process.env.PUBLIC_URL + "/projects",
  },
  {
    name: "contact",
    id: uniqid(),
    url: process.env.PUBLIC_URL + "/contact",
  },
]

export const paragraphs = [
  {
    id: uniqid(),
    title: "title",
    img: testImg,
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    title: "title",
    img: testImg,
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    title: "title",
    img: testImg,
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
]

export const teamList = [
  {
    id: uniqid(),
    img: testImg,
    name: "name",
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    img: testImg,
    name: "name",
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    img: testImg,
    name: "name",
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
]

export const projectsList = [
  {
    id: uniqid(),
    img: testImg,
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    img: testImg,
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
  {
    id: uniqid(),
    img: testImg,
    title: "title",
    text:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
  },
]
