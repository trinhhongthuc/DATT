import React, { useEffect, useState } from "react";
import MenuLeft from "./MenuLeft";
import Container from "@mui/material/Container";
import Header3 from "./../../components/Header3/Header3";
import { Link } from "react-router-dom";

//test biểu đồ
import axios from "axios";
import moment from "moment";
import LineChart from "./LineChart/index";

const getReportByCountry = () =>
  axios.get(" https://api.covid19api.com/dayone/country/south-africa");

const Index = () => {
  // tesst bieuer ddoo
  const [countries, setCountries] = React.useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState("");
  const [report, setReport] = React.useState([]);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    getReportByCountry().then((res) => {
      console.log(res);
      res.data.pop();
      setReport(res.data);
    });
  }, []);

  return (
    <>
      <div className="user">
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="user-wrapper-list-job">
                <h5 className="user-wrapper-list-job-title">
                  Danh sách cần làm
                </h5>
                <ul className="user-wrapper-list-job-ul">
                  <li className="user-wrapper-list-job-ul-li">
                    <Link to="#">
                      <p className="number">0</p>
                      <p>Chờ xác nhận</p>
                    </Link>
                  </li>
                  <li className="user-wrapper-list-job-ul-li">
                    <Link to="#">
                      <p className="number">0</p>
                      <p>Chờ lấy hàng</p>
                    </Link>
                  </li>
                  <li className="user-wrapper-list-job-ul-li">
                    <Link to="#">
                      <p className="number">0</p>
                      <p>Đã xử lý</p>
                    </Link>
                  </li>
                  <li className="user-wrapper-list-job-ul-li">
                    <Link to="#">
                      <p className="number">0</p>
                      <p>Đơn hủy</p>
                    </Link>
                  </li>
                  <li className="user-wrapper-list-job-ul-li">
                    <Link to="#">
                      <p className="number">0</p>
                      <p>sản phẩm hết hàng</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="user-wrapper-list-job">
                <h5 className="user-wrapper-list-job-title">
                  Phân tích bán hàng
                </h5>
                <LineChart data={report} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
