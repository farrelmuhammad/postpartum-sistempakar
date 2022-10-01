import { DatePicker, Input, message, Modal, Select } from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Url from "../Config";

const ModalProfile = ({open}) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    city: "",
    province: "",
    phone: "",
    birth_place: "",
    birth_date: "",
    gender: "",
    profession: "",
    study_level: "",
  });
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const auth = useSelector((state) => state.auth);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      // message.success('This is a success message');
    }, 2000);
    message.loading("Added question in progress..", 2.5);

    const userData = new URLSearchParams();
    // userData.append("symptoms_name", symptoms_name);
    // userData.append("password", password);
    axios({
      method: "post",
      url: `${Url}/profiles`,
      data: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then(() => {
        message.success("Successfully Added", 2.5);
      })
      .catch((err) => {
        message.error("Failed Added", 2);
        message.error("Please check your input", 2.5);
      });
  };
  return (
    <>
      <Modal
        title="Profile"
        centered
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="text-title text-start">
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Nama
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your name"
                // onChange={(e) => setSymptoms_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Alamat
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your address"
                // onChange={(e) => setSymptoms_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Kota
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select city"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Provinsi
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select province"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              No. Telpon
            </label>
            <div className="col-sm-9">
              <Input
                placeholder="Type your address"
                // onChange={(e) => setSymptoms_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Tempat Lahir
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select province"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Tanggal Lahir
            </label>
            <div className="col-sm-9">
              <DatePicker style={{ width: "100%" }} onChange={onChangeDate} />
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Jenis Kelamin
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select gender"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Laki - laki</Option>
                <Option value="lucy">Perempuan</Option>
              </Select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Pekerjaan
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select gender"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Pekerja</Option>
                <Option value="lucy">Ibu Rumah Tangga</Option>
              </Select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
              Pendidikan
            </label>
            <div className="col-sm-9">
              <Select
                showSearch
                placeholder="Select gender"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="jack">Pendidikan Tinggi</Option>
                <Option value="lucy">Sekolah Menengah</Option>
              </Select>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalProfile;
