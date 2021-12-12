import React from "react";
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
  UncontrolledAlert,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import Button from "@mui/material/Button";
import moment from "moment";
import FileBase64 from "react-file-base64";
import { AuthContext } from "./../../../../Context/AuthProvider";
// icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
// img local

import avatar from "../../../../assets/Image/avatar.png";
import { db } from "../../../../firebase/config";
import Loading from "../../../../components/Loading/Loading";
import { ReactComponent as LoadingThreeDot } from "../../../../assets/Image/three-dots.svg";
//code
const ProfileRight = () => {
  const { user } = React.useContext(AuthContext);

  // loading
  const [loading, setLoading] = React.useState(false);
  const [updateSuccess, setUpdateSuccess] = React.useState(false);
  const [updateErr, setUpdateErr] = React.useState(false);
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [dayOfBirth, setDayOfBirth] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [avatarUser, setAvatarUser] = React.useState("");

  React.useEffect(() => {
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
      setPhoneNumber(user.phone);
      setGender(user.gender);
      setDayOfBirth(user.dayOfBirth);
      setAddress(user.address);
      setAvatarUser(user.photoURL);
    }
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    const userResult = db.collection("users").doc(user.id);
    userResult
      .update({
        phone: phoneNumber,
        dayOfBirth: dayOfBirth,
        gender: gender,
        address: address,
        photoURL: avatarUser,
      })
      .then((res) => {
        setUpdateSuccess(true);
        setLoading(false);
        setTimeout(() => {
          setUpdateSuccess(false);
          clearTimeout();
        }, 4000);
      })
      .catch((err) => {
        setUpdateErr(true);
        setLoading(false);
        setTimeout(() => {
          setUpdateErr(false);
          clearTimeout();
        }, 4000);
      });
  };

  return (
    <div className="profile-right">
      {updateSuccess ? (
        <UncontrolledAlert color="success" fade={false}>
          <span className="alert-inner--icon">
            <CheckCircleIcon />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Thành công!</strong> Cập nhật thông tin hồ sơ thành công!
          </span>
        </UncontrolledAlert>
      ) : (
        ""
      )}

      {updateErr ? (
        <UncontrolledAlert color="danger" fade={false}>
          <span className="alert-inner--icon">
            <WarningIcon />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Thất bại!</strong> Cập nhật thông tin không thành công!
          </span>
        </UncontrolledAlert>
      ) : (
        ""
      )}

      {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}
      <div className="profile-right-wrapper">
        <div className="wrapper-top">
          <h4 className="heading">Hồ Sơ Của Tôi</h4>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>

        <div className="content">
          <div className="content-left">
            <ul>
              <li>
                <span>Tên </span>
                <Input
                  placeholder="Tên"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={true}
                />
              </li>

              <li>
                <span>Email:</span>
                <Input
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={true}
                />
              </li>

              <li>
                <span>Số điện thoại:</span>
                <Input
                  placeholder="Số điện thoại"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </li>

              <li>
                <span>Giới tính:</span>
                <div className="custom-control custom-radio mr-3">
                  <input
                    className="custom-control-input"
                    id="customRadio1"
                    name="custom-radio-1"
                    type="radio"
                    value={0}
                    onChange={(e) => setGender(e.target.value)}
                    defaultChecked={gender == 0 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1"
                  >
                    <span>Nam</span>
                  </label>
                </div>

                <div className="custom-control custom-radio mr-3">
                  <input
                    className="custom-control-input"
                    id="customRadio2"
                    name="custom-radio-1"
                    type="radio"
                    value={1}
                    onChange={(e) => setGender(e.target.value)}
                    defaultChecked={gender == 1 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    <span>Nữ</span>
                  </label>
                </div>
              </li>

              <li>
                <span>Ngày Sinh:</span>

                <div className="select-datetime">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <CalendarTodayIcon />
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Date Picker Here",
                        }}
                        timeFormat={false}
                        value={moment(dayOfBirth).calendar()}
                        onChange={(e) => {
                          setDayOfBirth(moment(e._d).format());
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
              </li>

              <li>
                <span>Địa chỉ giao hàng</span>
                <Input
                  placeholder="Địa chỉ giao hàng"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </li>
            </ul>
          </div>

          <div className="content-right">
            <div className="content-right-wrapper">
              <div className="avatar">
                <img src={avatarUser} alt="avatarUser" />
              </div>
              <label
                variant="contained"
                style={{
                  backgroundColor: "rgb(238, 77, 45)",
                  outLine: "none",
                }}
                for="file-input"
                className="label-input-avatar"
              >
                <FileBase64
                  id="file-input"
                  className="input-image"
                  multiple={false}
                  onDone={({ base64 }) => setAvatarUser(base64)}
                  accept="image/*"
                  type="file"
                  value={avatarUser}
                  required
                />
              </label>
            </div>
          </div>
        </div>

        <div className="button-center">
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(238, 77, 45)",
              outLine: "none",
            }}
            onClick={() => handleSave()}
          >
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;
