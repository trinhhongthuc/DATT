// icon
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "@mui/material/Container";
import React from "react";
const ChooseImageProduct = ({
  imgProduct,
  setImageProduct,
  setAvatarProduct,
  avatarProduct,
  setDescription,
  description,
}) => {
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;

        resolve(baseURL);
      };
    });
  };

  const handleFileInputChangeImg = (e, setState) => {
    let file = e.target.files[0];
    if (file.size < 5242880) {
      getBase64(file)
        .then((result) => {
          file["base64"] = result;
          setState(file.base64);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="choose-image-product">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="choose-image-product-wrapper">
              <h5 className="heading">Thông tin cơ bản</h5>
              <div className="image">
                <h5 className="image-title">Hình ảnh sản phẩm</h5>
                <ul className="image-wrapper">
                  <li>
                    {avatarProduct ? (
                      <img src={avatarProduct} alt={avatarProduct} />
                    ) : (
                      <label for="input1" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input1"
                      onChange={(e) =>
                        handleFileInputChangeImg(e, setAvatarProduct)
                      }
                    />

                    <label
                      for="input1"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Ảnh bìa
                    </label>
                  </li>

                  <li>
                    {imgProduct?.img1 !== "" ? (
                      <img src={imgProduct.img1} alt={imgProduct.img1} />
                    ) : (
                      <label for="input2" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input2"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file.size < 5242880) {
                          getBase64(file)
                            .then((result) => {
                              file["base64"] = result;
                              setImageProduct({
                                ...imgProduct,
                                img1: file.base64,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }}
                    />
                    <label
                      for="input2"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Hình ảnh 1
                    </label>
                  </li>

                  <li>
                    {imgProduct.img2 !== "" ? (
                      <img src={imgProduct.img2} alt={imgProduct.img2} />
                    ) : (
                      <label for="input3" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input3"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file.size < 5242880) {
                          getBase64(file)
                            .then((result) => {
                              file["base64"] = result;
                              setImageProduct({
                                ...imgProduct,
                                img2: file.base64,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }}
                    />
                    <label
                      for="input3"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Hình ảnh 2
                    </label>
                  </li>

                  <li>
                    {imgProduct.img3 !== "" ? (
                      <img src={imgProduct.img3} alt={imgProduct.img3} />
                    ) : (
                      <label for="input4" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input4"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file.size < 5242880) {
                          getBase64(file)
                            .then((result) => {
                              file["base64"] = result;
                              setImageProduct({
                                ...imgProduct,
                                img3: file.base64,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }}
                    />
                    <label
                      for="input3"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Hình ảnh 3
                    </label>
                  </li>

                  <li>
                    {imgProduct.img4 !== "" ? (
                      <img src={imgProduct.img4} alt={imgProduct.img4} />
                    ) : (
                      <label for="input5" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input5"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file.size < 5242880) {
                          getBase64(file)
                            .then((result) => {
                              file["base64"] = result;
                              setImageProduct({
                                ...imgProduct,
                                img4: file.base64,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }}
                    />
                    <label
                      for="input5"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Hình ảnh 4
                    </label>
                  </li>

                  <li>
                    {imgProduct.img5 !== "" ? (
                      <img src={imgProduct.img5} alt={imgProduct.img5} />
                    ) : (
                      <label for="input6" className="image-wrapper-custom">
                        <AddCircleOutlineIcon />
                      </label>
                    )}
                    <input
                      type="file"
                      id="input6"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file.size < 5242880) {
                          getBase64(file)
                            .then((result) => {
                              file["base64"] = result;
                              setImageProduct({
                                ...imgProduct,
                                img5: file.base64,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }
                      }}
                    />
                    <label
                      for="input6"
                      style={{ color: "#333", cursor: "pointer" }}
                    >
                      Hình ảnh 5
                    </label>
                  </li>
                </ul>
              </div>

              <div className="description">
                <div className="description-title">Mô tả sản phẩm</div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseImageProduct;
