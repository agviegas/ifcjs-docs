import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import routes from "../../routes";
import "./sidebar.css";

const Sidebar: React.FC<RouteComponentProps> = ({ history }) => {
  const isHomePath = history.location.pathname === routes.home;

  let sidebar = (
    <aside className="sidebar">
      <ul id="sidebar-index"></ul>
    </aside>);
  
  useEffect(() => {
    const titles = Array.from(document.getElementsByTagName("h2"));
    const subtitles = Array.from(document.getElementsByTagName("h3"));
    const sidebar = document.getElementById("sidebar-index");

    if (sidebar) {
      sidebar.innerHTML = "";

      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.onclick = () => {
          title.scrollIntoView();
          window.scrollTo(0, window.pageYOffset - 60);
        };
        link.innerHTML = title.innerHTML;
        item.appendChild(link);
        sidebar.appendChild(item);

        const nextTitle = titles[i + 1];
        const currentSubtitles: HTMLHeadingElement[] = [];
        if (nextTitle) {
          const nextTitleHeight = nextTitle.getBoundingClientRect().y;
          const currentTitleHeight = title.getBoundingClientRect().y;
          if (nextTitle) {
            subtitles.forEach((subt) => {
              const currentHeight = subt.getBoundingClientRect().y;
              if (nextTitleHeight > currentHeight && currentTitleHeight < currentHeight)
                currentSubtitles.push(subt);
            });
          }
        }
        if(currentSubtitles.length > 0){
          const subList = document.createElement("ul");
          item.appendChild(subList);
          currentSubtitles.forEach((subt) => {
            const subItem = document.createElement("li");
            const subLink = document.createElement("a");
            subLink.innerHTML = subt.innerHTML;
            subLink.onclick = () => {
              subt.scrollIntoView();
              window.scrollTo(0, window.pageYOffset - 60);
            };
            subItem.appendChild(subLink);
            subItem.classList.add("sidebar-bullets");
            subList.appendChild(subItem);
          })
        }
      }
    }
  });

  return isHomePath ? null : sidebar;
};

export default withRouter(Sidebar);
