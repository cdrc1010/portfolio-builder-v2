import React, { useState, useEffect } from "react";
import About from "./About";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useCollection } from "../../../hooks/useCollection";
import Portfolio from "./Portfolio";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function changeFavicon(src) {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = src;

  if (!link.parentNode) {
    document.head.appendChild(link);
  }
}


const Home = ({ visibleInPublic }) => {
  const { user } = useAuthContext();
  const params = useParams();
  const [pageTitle, setPageTitle] = useState('');

  const userUID = params.id ? params.id : user.uid;
  const { documents, error, loading } = useCollection("userProfile", [
    "uid",
    "==",
    userUID,
  ]);
  const { documents: doc } = useCollection("publicData", ["id", "==", userUID]);
  const publicDocument = doc.length && doc[0]
  const documentObject = publicDocument || {}
  const {name, photoURL, email} = documentObject
  const img = user ? user.photoURL : photoURL

  useEffect(() => {
    if (publicDocument || user) {
      setPageTitle(name)
      document.title = pageTitle;
      changeFavicon(img);
    }
  }, [pageTitle, publicDocument]);

  const renderContent = () => {
    return (
      <>
        {documents.length > 0 ? (
          <Portfolio
            userDetails={documents}
            currentUser={user}
            profilePic={img}
            visibleInPublic={visibleInPublic}
            displayName={name}
            publicEmail={email}
          />
        ) : (
          <About uid={userUID} />
        )}
      </>
    );
  };

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {!loading && renderContent()}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Home;
