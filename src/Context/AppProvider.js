import React, { useState } from "react";
import { db } from "../firebase/config";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [slide, setSlide] = useState([]);
  const [banner, setBanner] = useState([]);
  const [cart, setCart] = useState([]);

  const [menu, setListMenu] = React.useState([]);

  React.useEffect(() => {
    db.collection("Slide")
      .orderBy("createdAt")
      .limit(15)
      .get()
      .then((snapshot) => {
        const valueSlide = snapshot.docs
          .map((doc) => ({
            image: doc.data().image,
            nameSlide: doc.data().nameSlide,
            status: doc.data().status,
            id: doc.id,
          }))
          .filter((opt) => opt.status == 0);

        setSlide(valueSlide);
      });
  }, []);

  // banner
  React.useEffect(() => {
    db.collection("Banner")
      .orderBy("createdAt", "desc")
      .limit(20)
      .get()
      .then((snapshot) => {
        const valueBanner = snapshot.docs
          .map((doc) => {
            if (doc.data().status == 0)
              return {
                image: doc.data().image,
                nameBanner: doc.data().nameBanner,
                status: doc.data().status,
                id: doc.id,
              };
          })
          .filter((opt) => opt.status == 0);

        setBanner(
          valueBanner?.length <= 3 ? valueBanner : valueBanner.slice(0, 3)
        );
      });
  }, []);

  // menu
  React.useEffect(() => {
    db.collection("Menu")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        const valueMenu = snapshot.docs
          .map((doc) => {
            return {
              ...doc.data(),
            };
          })
          .filter((opt) => opt.parentId == 0);

        setListMenu(valueMenu);
      });
  }, []);

  return (
    <AppContext.Provider value={{ slide, banner, menu, setCart, cart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
