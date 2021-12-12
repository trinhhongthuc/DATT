import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase/config";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [menu, setListMenu] = React.useState([]);

  // menu
  React.useEffect(() => {
    db.collection("Menu")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        const valueMenu = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });

        setListMenu(valueMenu);
      });
  }, []);

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
          const dataUser = documents.find((item) => {
            if (item.uid === uid && item.role == 0) return item;
          });
          if (dataUser) {
            setUser(dataUser);
            setLoading(false);
            return;
          }
          return;
        });
      }
    });

    // clean function
    return () => {
      unSubscibed();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, setLoading, loading, menu }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
