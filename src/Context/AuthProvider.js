import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase/config";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const history = useHistory();

  React.useEffect(() => {
    const unSubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        let collectionRef = db.collection("users");
        collectionRef.onSnapshot((snapshot) => {
          const documents = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          const dataUser = documents.filter((item) => item.uid === uid);
          setUser(dataUser[0]);
          return;
        });
      }
      setUser("");
    });

    // clean function
    return () => {
      unSubscibed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
