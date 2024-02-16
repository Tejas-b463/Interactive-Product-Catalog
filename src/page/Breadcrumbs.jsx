import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x);
  //   console.log(pathNames);
  let breadCrumbPath = "";

  return (
    <div className="breadcurmbs">
      {pathNames.length > 0 && <Link to="/">Home </Link>}
      {pathNames.map((name, index) => {
        breadCrumbPath += `${name}`;
        const isLast = index === pathNames.length - 1;

        return isLast ? (
          <span> / {name}</span>
        ) : (
          <span key={breadCrumbPath}>
            / <Link>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
