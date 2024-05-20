import React from "react";
import About from "./About";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useCollection } from "../../../hooks/useCollection";
import Portfolio from "./Portfolio";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Home = ({ visibleInPublic }) => {
  const { user } = useAuthContext();
  const params = useParams();
  const userUID = params.id ? params.id : user.uid;
  const { documents, error, loading } = useCollection("userProfile", [
    "uid",
    "==",
    userUID,
  ]);
  const { documents: doc } = useCollection("publicData", ["id", "==", userUID]);
  const img = doc.length && doc[0].photoURL;
  const displayPhoto = user ? user.photoURL : img;
  console.log("doc: ", doc);

  const renderContent = () => {
    return (
      <>
        {documents.length > 0 ? (
          <Portfolio
            userDetails={documents}
            currentUser={user}
            profilePic={displayPhoto}
            visibleInPublic={visibleInPublic}
          />
        ) : (
          <About uid={userUID} />
        )}
      </>
    );
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && renderContent()}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Home;
