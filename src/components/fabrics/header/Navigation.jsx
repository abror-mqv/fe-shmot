import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants} onClick={toggle}>
    <MenuItem i={0} key={0} data={data[0]} onClick={toggle} />
    <MenuItem i={1} key={1} data={data[1]} onClick={toggle} />
    <MenuItem i={2} key={2} data={data[2]} onClick={toggle} />
    <MenuItem i={3} key={3} data={data[3]} onClick={toggle} />
  </motion.ul>
);

const data = [
  {
    picture: "question.png",
    title: "Как заказать?",
    link: "/",
  },
  {
    picture: "add-user.png",
    title: "Почему с нам?",
    link: "/about",
  },
  {
    picture: "deal.png",
    title: "Условия",
    link: "/get",
  },
  {
    picture: "sewing-machine.png",
    title: "Индивидуальный пошив",
    link: "/play"
  },
  {
    picture: "phone.png",
    title: "Моментальный контакт",
    link: "/"
  }
];