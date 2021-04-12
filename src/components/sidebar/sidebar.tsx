import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import routes from "../../routes";
import "./sidebar.css";

type Heading = HTMLHeadingElement;
type ListItem = HTMLLIElement;
type List = HTMLUListElement;
type Anchor = HTMLAnchorElement;

const Sidebar: React.FC<RouteComponentProps> = ({ history }) => {
  const path = history.location.pathname;
  const isHomePath = path === routes.home || path + "/" === routes.home;

  let sidebar = (
    <aside className="sidebar">
      <ul id="sidebar-index"></ul>
    </aside>
  );

  useEffect(() => {
    updateSidebarContent();
  });

  return isHomePath ? null : sidebar;
};

function updateSidebarContent() {
  const { titles, sidebar } = getHTMLElements();
  if (!sidebar) return null;
  sidebar.innerHTML = "";
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const nextTitle = titles[i + 1];
    const item = addItem(title, sidebar);
    appendSubtitles(title, nextTitle, item);
  }
}

function getHTMLElements() {
  return {
    titles: Array.from(document.getElementsByTagName("h2")),
    sidebar: document.getElementById("sidebar-index"),
  };
}

function appendSubtitles(title: Heading, nextTitle: Heading, item: ListItem) {
  const subtitles = getSubtitles(title, nextTitle);
  if (subtitles.length <= 0) return null;
  const subList = document.createElement("ul");
  item.appendChild(subList);
  subtitles.forEach((subtitle) => addItem(subtitle, subList));
}

function getSubtitles(title: Heading, nextTitle: Heading) {
  const subtitles: Heading[] = [];
  if (!nextTitle) return subtitles;
  const allSubtitles = Array.from(document.getElementsByTagName("h3"));
  const nextTitleHeight = nextTitle.getBoundingClientRect().y;
  const currentTitleHeight = title.getBoundingClientRect().y;
  allSubtitles.forEach((subt) => {
    const currentHeight = subt.getBoundingClientRect().y;
    if (nextTitleHeight > currentHeight && currentTitleHeight < currentHeight)
      subtitles.push(subt);
  });
  return subtitles;
}

function addItem(title: Heading, parent: List | HTMLElement) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  scrollOnClick(title, link);
  link.innerHTML = title.innerHTML;
  item.appendChild(link);
  item.classList.add("sidebar-bullets");
  parent.appendChild(item);
  return item;
}

function scrollOnClick(title: Heading, link: Anchor) {
  link.onclick = () => {
    title.scrollIntoView();
    window.scrollTo(0, window.pageYOffset - 60);
  };
}

export default withRouter(Sidebar);
