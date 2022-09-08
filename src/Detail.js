import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Detail.css";
import { useEffect } from "react";
import { clean, getOrgs, getRepos } from "./Redux/slice";

const Detail = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.USERS.users);
  const repos = useSelector((state) => state.USERS.repos);
  const orgs = useSelector((state) => state.USERS.orgs);

  const user = users.find((data) => data.login === username);
  const { repos_url, organizations_url, avatar_url } = user;

  useEffect(() => {
    dispatch(getRepos(repos_url));
    dispatch(getOrgs(organizations_url));
    return () => {dispatch(clean())}
  }, [dispatch, repos_url, organizations_url]);

  const reposToRender = repos.slice(0, 5);
  console.log(orgs);

  return (
    <div className="Detail">
      <div className="Detail-card">
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '40px'}}>
            <Link to={'/'} style={{width: 'fit-content'}}>
             <img className="Detail-back" src="https://img.icons8.com/stickers/100/000000/double-left.png" alt="back"/>
            </Link>
            <div className="Detail-img-box">
                <img className="Detail-img" src={avatar_url} alt="avatar" />
            </div>
            <h3 className="Detail-title">{username}</h3>
        </div>
        
        <div className="Detail-box" >
        <div className="Detail-repos-container"> <strong>Repositorios: </strong> 
            {
                reposToRender.length > 0 ? 
                reposToRender.map((data) => 
                <div className="Detail-repos-container-text" key={users.id}>
                    <div>{data.name} </div>
                    <div>{data.description} </div>
                    <div>{data.html_url} </div>
                </div>
                ) : (
                    <div  style={{display: 'flex', justifyContent: "center"}}> Este usuario aún no tiene repos </div>
                )
            }
            </div> 
             <div className="Detail-repos-container"> <strong>Organizaciones: </strong>
             {
                orgs.length > 0 ? 
                orgs.map((data) => 
                <div className="Detail-repos-container-text" key={username}>
                    <div>{data.login} </div>
                    <div>{data.description} </div>
                </div>
                ) : (
                    <div style={{display: 'flex', justifyContent: "center"}}> Este usuario aún no tiene orgs </div>
                )
            }
             </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
